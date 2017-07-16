package com.cekiboy.comet.activities

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.support.v7.widget.Toolbar
import com.cekiboy.comet.R

/**
 * Created by itock on 7/15/2017.
 */
class MainActivity: AppCompatActivity() {

    private var toolbar: Toolbar? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        toolbar = findViewById(R.id.toolbar) as Toolbar

        setSupportActionBar(toolbar)
    }
}