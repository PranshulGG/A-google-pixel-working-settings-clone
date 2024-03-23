package com.example.settingsp;

import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

public class earthQuakeAlert extends AppCompatActivity {
    private WebView webview;






    public void onBackPressed() {
        super.onBackPressed();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);



        getWindow().setFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS, WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS);



        WindowManager.LayoutParams layoutParams = getWindow().getAttributes();
        layoutParams.screenBrightness = 1f;
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
        webview.loadUrl("file:///android_asset/pages/earthQuakeAlert.html");

        webview.setBackgroundColor(getResources().getColor(R.color.bg));


    }



    public class AndroidInterface {
        private earthQuakeAlert eActivity;

        AndroidInterface(earthQuakeAlert activity) {
            eActivity = activity;
        }

        @JavascriptInterface
        public void updateStatusBarColor(final String color) {
            eActivity.runOnUiThread(new Runnable() {
                @Override
                public void run() {

                    if (color.equals("Goback")) {
                        back();

                    }

                    else {
                        Toast.makeText(eActivity, "Error", Toast.LENGTH_LONG).show();
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
