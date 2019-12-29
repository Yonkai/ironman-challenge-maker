import Head from 'next/head'
import React from 'react'

export default () => (
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
    </Head>
    <style jsx global>{`
            p{
              color:red;
              font-size:18px;
              margin:5px;
            }
            li{
              color:white;
              font-size:18px;
              margin-left:40px;
              list-style:none;
            }
            ul{
              color:lightgreen;
              font-size:18px;
              margin:0;
              padding:0;
            }
            span{
                color:white;
            }
            `}</style>
  </div>
)
