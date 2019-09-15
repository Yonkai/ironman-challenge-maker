import Head from 'next/head'
export default () => (
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
    </Head>
    <style jsx global>{`
            p{
              color:white;
              font-size:20px;
              margin:5px;
            }
            li{
              color:white;
              font-size:22px;
              margin-left:40px;
            }
            ul{
              color:lightgreen;
              font-size:24px;
              margin:0;
              padding:0;
            }
            span{
                color:white;
            }
            `}</style>
  </div>
)