package com.example.settingsp;

import android.os.Bundle;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

public class SetPasswordScreen extends AppCompatActivity {
    private WebView webview;






    public void onBackPressed() {
        super.onBackPressed();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);




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
        webview.loadUrl("file:///android_asset/SetSecurityScreens/password.html");

        webview.setBackgroundColor(getResources().getColor(R.color.purpleBG));


    }



    public class AndroidInterface {
        private SetPasswordScreen paActivity;

        AndroidInterface(SetPasswordScreen activity) {
            paActivity = activity;
        }

        @JavascriptInterface
        public void updateStatusBarColor(final String color) {
            paActivity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    int systemUiVisibilityFlags = View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR | View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR;

                    if (color.equals("Goback")) {
                        back();

                    } else if (color.equals("DarkStyle")) {
                        getWindow().setStatusBarColor(ContextCompat.getColor(paActivity, R.color.purpleBG));
                        getWindow().setNavigationBarColor(ContextCompat.getColor(paActivity, R.color.purpleBG));
                        setTheme(R.style.SetLockScreenTheme);
                        systemUiVisibilityFlags = 0;


                    } else if (color.equals("LightStyle")) {
                        getWindow().setStatusBarColor(ContextCompat.getColor(paActivity, R.color.PurpleBGLIGHT));
                        getWindow().setNavigationBarColor(ContextCompat.getColor(paActivity, R.color.PurpleBGLIGHT));
                        setTheme(R.style.purple_light_scheme);
                    }

                    else {
                        Toast.makeText(paActivity, "Error", Toast.LENGTH_LONG).show();
                        View decorView = getWindow().getDecorView();
                        decorView.setSystemUiVisibility(0);
                    }
                    View decorView = paActivity.getWindow().getDecorView();
                    decorView.setSystemUiVisibility(systemUiVisibilityFlags);
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

