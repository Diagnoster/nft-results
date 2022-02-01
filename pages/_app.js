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

        .background-chat {
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

        .box-chat {
          position: relative;
          display: flex;
          flex: 1;
          height: 80%;
          background-color: rgb(41,51,61,255);
          flex-direction: column;
          border-radius: 5px;
          padding: 16px;
        }

        .fields-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-bottom: 32px;
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

        .group-name {
          margin-bottom: 32px;
          color: #67717b;
        }
        
        .photo-text {
          color: white;
          background-color: #101418;
          padding: 3px 10px;
          border-radius: 1000px;
        }

        .box-chat-external {
          display: flex;
          flex-direction: column;
          flex: 1;
          box-shadow: 0 2px 10px 0 rgb(41,51,61,255);
          background-color: rgb(33,41,49,255);
          border-radius: 5px;
          height: 100%;
          max-width: 95%;
          max-height: 95vh;
          padding: 32px;

        }

        .field-write {
          width: 100%;
          border: 0;
          resize: none;
          border-radius: 5px;
          padding: 6px 8px;
          margin-right: 12px;
        }

        .date-field {
          margin-left: 8px;
          color: rgb(154,165,177,255);
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