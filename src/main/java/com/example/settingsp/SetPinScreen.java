package com.example.settingsp;

import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

public class SetPinScreen extends AppCompatActivity {
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
        webview.loadUrl("file:///android_asset/SetSecurityScreens/pin.html");



    }



    public class AndroidInterface {
        private SetPinScreen piActivity;

        AndroidInterface(SetPinScreen activity) {
            piActivity = activity;
        }

        @JavascriptInterface
        public void updateStatusBarColor(final String color) {
            piActivity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    int systemUiVisibilityFlags = View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR | View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR;

                    if (color.equals("Goback")) {
                        back();

                    } else if (color.equals("ShowToastDemo")) {
                        Toast.makeText(piActivity, "Its a demo setting", Toast.LENGTH_SHORT).show();

                    } else if (color.equals("DarkStyle")) {
                        getWindow().setStatusBarColor(ContextCompat.getColor(piActivity, R.color.purpleBG));
                        getWindow().setNavigationBarColor(ContextCompat.getColor(piActivity, R.color.surfacContainer));
                        setTheme(R.style.SetPinScreenTheme);
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("LightStyle")) {
                        getWindow().setStatusBarColor(ContextCompat.getColor(piActivity, R.color.PurpleBGLIGHT));
                        getWindow().setNavigationBarColor(ContextCompat.getColor(piActivity, R.color.purpleSurfaceContainerLight));
                        setTheme(R.style.SetPinScreenThemeLIGHT);


                    } else {
                        Toast.makeText(piActivity, "Error", Toast.LENGTH_LONG).show();
                        View decorView = getWindow().getDecorView();
                        decorView.setSystemUiVisibility(0);
                    }
                    View decorView = piActivity.getWindow().getDecorView();
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
