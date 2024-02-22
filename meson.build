project('GCyberChef',
  version: '1.0.0',
  license: ['GPL-3.0-or-later'],
  meson_version: '>= 0.59.0'
)

APP_ID = 'xyz.kowalski7cc.GCyberChef'

gnome = import('gnome')
i18n = import('i18n')

subdir('data')
subdir('src')

gnome.post_install(
	glib_compile_schemas: true,
	gtk_update_icon_cache: true,
	update_desktop_database: true
)
