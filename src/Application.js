import Gtk from "gi://Gtk";
import GObject from "gi://GObject";
import Adw from "gi://Adw";
import WebKit from "gi://WebKit";
import GLib from "gi://GLib?version=2.0";


export const Application = GObject.registerClass(
  {
    GTypeName: "GCyberChefApplication",
  },
  class extends Adw.Application {
    vfunc_activate() {
      const window = new Gtk.ApplicationWindow({
        application: this,
        default_height: 768,
        default_width: 1024,
        title: "GCyberChef",
      });
      const webview = new WebKit.WebView();
      webview.get_settings().enableJavascript = true;
      webview.get_settings().set_javascript_can_access_clipboard(true);
      webview
        .get_settings()
        .set_javascript_can_open_windows_automatically(false);

      window.child = webview;
      webview.load_uri("file:///app/share/cyberchef/index.html");
      const shortcutController = new Gtk.ShortcutController();
      shortcutController.add_shortcut(
        new Gtk.Shortcut({
          action: Gtk.NamedAction.new("app.quit"),
          trigger: Gtk.ShortcutTrigger.parse_string("<ctrl>q"),
        })
      )
      shortcutController.add_shortcut(
        new Gtk.Shortcut({
          action: Gtk.NamedAction.new("win.close"),
          trigger: Gtk.ShortcutTrigger.parse_string("<ctrl>w"),
        })
      )
      shortcutController.add_shortcut(
        new Gtk.Shortcut({
          action: Gtk.NamedAction.new("win.fullscreen"),
          trigger: Gtk.ShortcutTrigger.parse_string("<F11>"),
        })
      )
      shortcutController.add_shortcut(
        new Gtk.Shortcut({
          action: Gtk.NamedAction.new("app.about"),
          trigger: Gtk.ShortcutTrigger.parse_string("<F1>"),
        })
      )
      window.add_controller(shortcutController);
      window.present();
    }
  }
);
