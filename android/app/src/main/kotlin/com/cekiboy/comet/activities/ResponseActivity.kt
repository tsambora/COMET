package com.cekiboy.comet.activities

import android.graphics.Bitmap
import android.os.Bundle
import android.support.v4.app.NavUtils
import android.support.v4.content.ContextCompat
import android.support.v7.app.AppCompatActivity
import android.support.v7.widget.Toolbar
import android.util.DisplayMetrics
import android.view.MenuItem
import android.widget.ImageView
import android.widget.TextView
import com.cekiboy.comet.R
import com.google.zxing.BarcodeFormat
import com.google.zxing.MultiFormatWriter
import org.web3j.crypto.ECKeyPair
import org.web3j.crypto.Hash
import org.web3j.crypto.Sign
import java.math.BigInteger

/**
 * Created by itock on 7/18/2017.
 */
class ResponseActivity : AppCompatActivity() {

    companion object {
        val EXTRA_TRANSACTION_TOKEN = "extra_transaction_token"
    }

    private var toolbar: Toolbar? = null
    private var imageViewQr: ImageView? = null
    private var textViewResponse: TextView? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_response)

        toolbar = findViewById(R.id.toolbar) as Toolbar
        imageViewQr = findViewById(R.id.qr) as ImageView
        textViewResponse = findViewById(R.id.response) as TextView

        setSupportActionBar(toolbar)
        supportActionBar?.title = null
        supportActionBar?.setDisplayHomeAsUpEnabled(true)

        val token = intent.getStringExtra(EXTRA_TRANSACTION_TOKEN)

        if (!token.isNullOrEmpty()) {
            val response = generateTokenResponse(token)
            val bitmap = generateQr(response)

            imageViewQr?.setImageBitmap(bitmap)
            textViewResponse?.text = response
        }
    }

    override fun onOptionsItemSelected(item: MenuItem?): Boolean {
        when (item?.itemId) {
            android.R.id.home -> {
                NavUtils.navigateUpFromSameTask(this)

                return true
            }
            else -> return super.onOptionsItemSelected(item)
        }
    }

    private fun generateTokenResponse(token: String): String {
        val privateKey = "0000000000000000000000000000000000000000000000000000000000000001"
        val keyPair = ECKeyPair.create(BigInteger(privateKey, 16))

        val messageHash = Hash.sha3(token.toByteArray())
        val signedMessage = Sign.signMessage(messageHash, keyPair)

        var r = ""
        for (b in signedMessage.r) r += String.format("%02x", b)

        var s = ""
        for (b in signedMessage.s) s += String.format("%02x", b)

        return "0x$r${s}0${signedMessage.v-27}"
    }

    private fun generateQr(text: String): Bitmap {
        val displayMetrics = DisplayMetrics()
        windowManager.defaultDisplay.getMetrics(displayMetrics)
        val displayWidth = displayMetrics.widthPixels
        val displayHeight = displayMetrics.heightPixels

        val dimension = (Math.min(displayWidth, displayHeight) * .8).toInt()

        val writer = MultiFormatWriter()
        val result = writer.encode(text, BarcodeFormat.QR_CODE, dimension, dimension, null)

        val width = result.width
        val height = result.height

        val blockColor = ContextCompat.getColor(this, R.color.colorPrimaryDark)
        val spaceColor = ContextCompat.getColor(this, android.R.color.transparent)

        val pixels = IntArray(width * height)

        repeat(height, { y ->
            val offset = y * width

            repeat(width, { x ->
                pixels[offset + x] = if (result[x, y]) blockColor else spaceColor
            })
        })

        val bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888)
        bitmap.setPixels(pixels, 0, width, 0, 0, width, height)

        return bitmap
    }
}