import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';
import { useRouter } from 'next/router';
import React from 'react';

function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
    </>
  );
}

export default function PaginaInicial() {
  //const username = 'Diagnoster';
  const roteamento = useRouter();
  const [username, setUsername] = React.useState('James Rovel Barbosa');

  return (
    <>
      <Box className="background"
        styleSheet={{
          backgroundImage: 'url(https://media.istockphoto.com/photos/gold-coins-picture-id165418688?k=20&m=165418688&s=612x612&w=0&h=Nw4eXeYtbwNPavfU55647mxSaZUldDlZ7CfYJSCLuXo=)',
        }}
      >
        <Box className="external-box">
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function(infosDoEvento) {
              infosDoEvento.preventDefault(); // evitando refresh da página
              console.log('Alguém envio o form')
              roteamento.push('/chat');
              
              //window.location.href = '/chat'; // outro maneira de trocar page
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

           <TextField
              fullWidth
              value={username}
              onChange={function Handler() {
                console.log('Usuário digitou', event.target.value)
                const valor = event.target.value;
                // change variable
                setUsername(valor);
              }}
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            /> 
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box className='photo-box'>
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text className="photo-text" variant="body4">
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}