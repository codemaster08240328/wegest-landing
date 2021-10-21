import Head from 'next/head'

const Meta = () => (
  <Head>
    <title>WeGest</title>
    <meta charSet='utf-8' />
    <meta name='mobile-web-app-capable' content='yes' />
    <meta name='apple-mobile-web-app-capable' content='yes' />
    <meta
      name='apple-mobile-web-app-status-bar-style'
      content='black-translucent'
    />
    <meta name='apple-mobile-web-app-title' content='WeGest' />
    <meta name='application-name' content='WeGest' />
    <meta name='description' content='Bring your own ingredients' />
    <meta name='theme-color' content='#1d2020' />
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover'
    />

    <link
      rel='apple-touch-icon'
      sizes='180x180'
      href='/images/icons/apple-touch-icon.png'
    />

    <link
      rel='icon'
      type='image/png'
      sizes='16x16'
      href='/images/icons/favicon-16x16.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='32x32'
      href='/images/icons/favicon-32x32.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='48x48'
      href='/images/icons/favicon-48x48.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='64x64'
      href='/images/icons/favicon-64x64.png'
    />

    <link rel='manifest' href='/site.webmanifest' />
    <link
      rel='mask-icon'
      href='/images/icons/safari-pinned-tab.svg'
      color='#17699f'
    />
    <meta name='msapplication-TileColor' content='#2b5797' />
    <meta name='theme-color' content='#17699f' />

    <link rel='manifest' href='/manifest.json' />
    <link
      href='https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
      rel='stylesheet'
    />
  </Head>
)

export default Meta
