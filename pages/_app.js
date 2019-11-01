import React from 'react'
import App from 'next/app'
import Link from 'next/link'
import Head from 'next/head'

class Layout extends React.Component {
  render () {
    const { children } = this.props
    return (
      <div className='containerMain'>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <link href='https://fonts.googleapis.com/css?family=Gabriela|Jomolhari&display=swap' rel='stylesheet' />
        </Head>
        <nav className='navMenu'>
          <figure>
            <img src='../static/ironman_logo_custom.png' alt='website logo' href='/' width='120px' height='120px' />
            <figcaption>Fantasy Ironman Creator</figcaption>
          </figure>

          <Link href='/'><a id='internalPage'>Creator</a></Link>
          <Link href='/load-ironman'><a id='internalPage'>Ironman Portal</a></Link>
          <Link href='/cool-map'><a id='internalPage'>Map</a></Link>
          <Link href='/define'><a id='internalPage'>Definitions</a></Link>
          <Link href='/how-to-use'><a id='internalPage'>How to Use</a></Link>
          <Link href='/runelite'><a id='internalPage'>RuneLite Plugin</a></Link>
          <Link href='/settings'><a id='internalPage'>Settings</a></Link>
          <Link href='/contributing'><a>Contribute?</a></Link>
          <Link href='https://github.com/Yonkai/ironman-challenge-maker'><a>Github</a></Link>
          <Link href='https://oldschool.runescape.com/'><a>Play OSRS</a></Link>
          <iframe src='https://ghbtns.com/github-btn.html?user=Yonkai&repo=ironman-challenge-maker&type=star&count=true&size=large' frameBorder='0' scrolling='0' width='170px' height='50px' />
        </nav>
        {children}
        <style jsx global>
          {`
        body,html{
          margin:0;
          font-family: 'Gabriela', serif;
        }
        img{
          margin-left:-20px;
        }
        .containerMain{
          display:grid;
          grid-template-columns: 150px 3fr 5fr;
          grid-template-areas:"nav forms display";
          grid-gap:5px;
          height:100vh;
        }
        ${this.props.overwrittenLayout ? this.props.overwrittenLayout : `.containerMain{
          display:grid;
          grid-template-columns: 150px 3fr 5fr;
          grid-template-areas:"nav forms display";
          grid-gap:5px;
          height:100vh;
          
        }`}

        .navMenu{
          background-color:black;
          color:white;
          grid-area:nav;
          height:100vh;
          display:inline-block;
        }
        .navMenu a{
          display:block;
          margin-top:20px;
          color:white;
          font-size:18px;
          text-decoration:n
        }

        #internalPage {
          color:yellow;
        }
        //tablet
        @media only screen and (max-width: 850px) {
          .containerMain{
            grid-template-columns: 150px 1fr;
            grid-template-rows:1fr 1fr;
            grid-template-areas:
            "nav display"
            "nav forms";
          }
        }
        //mobile add pull-out menu?
        @media only screen and (max-width: 475px) {
          .containerMain{
            grid-template-columns: 1fr;
            grid-template-areas:
                      "display"
                      "forms";
                    }
                    .navMenu{
                      display:none;
                    }
                  }
                  `}
        </style>
      </div>
    )
  }
}

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
