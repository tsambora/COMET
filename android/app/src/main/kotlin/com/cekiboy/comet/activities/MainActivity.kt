package com.cekiboy.comet.activities

import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.support.v7.widget.Toolbar
import android.widget.Button
import android.widget.EditText
import com.cekiboy.comet.R

/**
 * Created by itock on 7/15/2017.
 */
class MainActivity: AppCompatActivity() {

    private var toolbar: Toolbar? = null
    private var editToken: EditText? = null
    private var buttonSubmit: Button? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        toolbar = findViewById(R.id.toolbar) as Toolbar
        editToken = findViewById(R.id.token) as EditText
        buttonSubmit = findViewById(R.id.submit) as Button

        setSupportActionBar(toolbar)

        buttonSubmit?.setOnClickListener {
            val token = editToken?.text?.toString()
            if (token?.isNullOrEmpty()!!) return@setOnClickListener

            val intent = Intent(this, ResponseActivity::class.java)
            intent.putExtra(ResponseActivity.EXTRA_TRANSACTION_TOKEN, token)

            startActivity(intent)
        }
    }
}