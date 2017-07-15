package com.cekiboy.comet.activities

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.support.v7.app.AppCompatActivity
import com.cekiboy.comet.R

/**
 * Created by itock on 7/15/2017.
 */
class SplashActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splash)

        Handler().postDelayed({
            finish()
            startActivity(Intent(this, LoginActivity::class.java))
        }, 1000)
    }
}