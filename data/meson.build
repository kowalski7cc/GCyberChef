# Compile the resources
gnome.compile_resources(
	APP_ID + '.data',
	APP_ID + '.data.gresource.xml',
	gresource_bundle: true,
	install: true,
	install_dir: get_option('datadir') / APP_ID
)

install_data(
	APP_ID + '.gschema.xml',
	install_dir: get_option('datadir') / 'glib-2.0' / 'schemas'
)


install_data(
	'icons' / APP_ID + '.svg',
	install_dir: get_option('datadir') / 'icons' / 'hicolor' / 'scalable' / 'apps'
)

configure_file(
	input: APP_ID + '.service',
	output: APP_ID + '.service',
	configuration: {
		'APP_ID': APP_ID,
		'BINDIR': get_option('prefix') / get_option('bindir')
	},
	install: true,
	install_dir: get_option('datadir') / 'dbus-1' / 'services'
)

i18n.merge_file(
	type: 'desktop',
	input: configure_file(
		input: APP_ID + '.desktop',
		output: APP_ID + '.desktop.in',
		configuration: {
			'APP_ID': APP_ID,
			'BINDIR': get_option('prefix') / get_option('bindir')
		}
	),
	output: APP_ID + '.desktop',
	po_dir: meson.project_source_root() / 'po',
	install: true,
	install_dir: get_option('datadir') / 'applications'
)

configure_file(
	input: APP_ID + '.service',
	output: APP_ID + '.service',
	configuration: {
		'APP_ID': APP_ID,
		'BINDIR': get_option('prefix') / get_option('bindir')
	},
	install: true,
	install_dir: get_option('datadir') / 'dbus-1' / 'services'
)

i18n.merge_file(
	input: configure_file(
		input: APP_ID + '.metainfo.xml',
		output: APP_ID + '.metainfo.xml.in',
		configuration: {
			'APP_ID': APP_ID,
		}
	),
	output: APP_ID + '.metainfo.xml',
	type: 'xml',
	po_dir: meson.project_source_root() / 'po',
	install: true,
	install_dir: get_option('datadir') / 'metainfo'
)
