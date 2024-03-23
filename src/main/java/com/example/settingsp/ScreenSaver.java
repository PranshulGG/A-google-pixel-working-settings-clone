package com.example.settingsp;

import android.app.Activity;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.example.settingsp.R;

public class ScreenSaver extends AppCompatActivity {
    private WebView webview;





    public void onBackPressed() {
        super.onBackPressed();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN);
        getWindow().getDecorView().setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);





        WindowManager.LayoutParams layoutParams = getWindow().getAttributes();
        layoutParams.screenBrightness = 0.1f;
        getWindow().setAttributes(layoutParams);


        getWindow().setFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON, WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);



        setContentView(R.layout.activity_main);

        // Webview stuff
        webview = findViewById(R.id.webView);
        WebSettings webSettings = webview.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setAllowFileAccessFromFileURLs(true);
        webSettings.setAllowUniversalAccessFromFileURLs(true);
        webSettings.setAllowContentAccess(true);
        webview.setVerticalScrollBarEnabled(false);
        webview.setHorizontalScrollBarEnabled(false);
        webview.setOverScrollMode(WebView.OVER_SCROLL_NEVER);
        webview.setWebViewClient(new WebViewClientDemo());
        AndroidInterface androidInterface = new AndroidInterface(this);
        webview.addJavascriptInterface(androidInterface, "AndroidInterface");
        webview.loadUrl("file:///android_asset/pages/screen_saver.html");

        webview.setBackgroundColor(getResources().getColor(R.color.bg));


    }



    public class AndroidInterface {
        private ScreenSaver sActivity;

        AndroidInterface(ScreenSaver activity) {
            sActivity = activity;
        }

        @JavascriptInterface
        public void updateStatusBarColor(final String color) {
            sActivity.runOnUiThread(new Runnable() {
                @Override
                public void run() {

                    if (color.equals("Goback")) {
                        back();

                    }

                    else {
                        Toast.makeText(sActivity, "Error", Toast.LENGTH_LONG).show();
                        View decorView = getWindow().getDecorView();
                        decorView.setSystemUiVisibility(0);
                    }
                }
            });
        }
    }

    public void back() {
        onBackPressed();
    }




    private static class WebViewClientDemo extends WebViewClient {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            view.loadUrl(url);
            return true;
        }
    }



}
