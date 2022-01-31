function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }

        .background {
          display: flex;
          align-items: center;
          justify-content: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-blend-mode: multiply;
        }

        .external-box {
          display: flex;
          align-itens: center;
          justify-content: space-between;
          width: 100%;
          max-width: 700px;
          border-radius: 5px;
          padding: 32px;
          margin: 16px;
          background-color: rgb(33,41,49,255);
        }

        .photo-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 200px;
          padding: 16px;
          background-color: #181f25;
          border: 1px solid;
          border-color: #0f1317;
          border-radius: 10px;
          flex: 1;
          min-height: 240px;
        }
        
        .photo-text {
          color: white;
          background-color: #101418;
          padding: 3px 10px;
          border-radius: 1000px;
        }

        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
  }

export default function CustomApp ({ Component, pageProps }) {
    console.log('Funciona em todas as paginas');
    return (
        <>  
            <GlobalStyle />     
            <Component {...pageProps} />
        </>
        );
}