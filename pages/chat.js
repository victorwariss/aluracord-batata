import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React, { useState } from 'react';
import appConfig from '../config.json';

export default function ChatPage() {
    const [mensagem, setMensagem] = React.useState('');
    const [listaDeMensagens, setListaDeMensagens] = React.useState([]);
    /*
    // Sua lógica vai aqui
    - Usuário digita o campo textarea
    - aperta enter pra enviar
    - Tem que adicionar o texto na listagem

    // ./Sua lógica vai aqui
    - [X]Campo criado
    - [+/-]usar o onChange us ao UseState (ter if caso seja enter pra limpar a variavel)
    - [] lista de mensagens
    
    -----------------------------------------------------------------------------------------
    // logica botão de deletar msg
    - clica no botão
    - pega a msg e deletar da lista de msg

    
    */

    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            texto: novaMensagem,
            from: 'victorwariss',
            id: listaDeMensagens.length + 1,
        };
        setListaDeMensagens([
            mensagem,
            ...listaDeMensagens,
        ])
        setMensagem('');
    }

    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: `url(https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F02%2F25%2FGettyImages-1224918845-2000.jpg)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >
                    <MessageList mensagens={listaDeMensagens} />
                    {/* {listaDeMensagens.map((mensagemAtual)=>{
                        return (
                            <li key={mensagemAtual.id}>
                                {mensagemAtual.from}: {mensagemAtual.texto} 
                            </li>
                        )
                    })} */}

                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            value={mensagem}
                            onChange={function handle(event) {
                                const valor = event.target.value;
                                setMensagem(valor);
                            }}
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    event.preventDefault();
                                    handleNovaMensagem(mensagem);
                                }
                            }}
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                                minWidth: '160px',
                            }}
                        />
                        <Button
                            type='submit'
                            label='Enviar'
                            onClick={(event) =>{
                                event.preventDefault();
                                handleNovaMensagem(mensagem);
                            }}
                            styleSheet={{
                                width: '7%',
                                minWidth: '60px',
                                borderRadius: '20px',
                            }}
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    console.log('MessageList', props);
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
            {props.mensagens.map((mensagem) => {
                return (
                    <Text
                        key={mensagem.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: '8px',
                                display: 'flex',
                                justifyContent: 'space-betwen',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/victorwariss.png`}
                            />
                            <Text tag="strong">
                                {mensagem.from}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                    flex: '5',
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                            
                            {/* <Button
                            type='button'
                            label='x'
                            maxHeight
                            onClick={(props)=>{
                                const removedorId = props.mensagem.id
                                const NovaLista = props.listaDeMensagens.filter(props.mensagem.id !== removedorId)
                                setListaDeMensagens(NovaLista)
                            }}
                            styleSheet={{
                                width: '3px',
                                height: '3px',
                                maxWidth: '3px',
                                borderRadius: '20px',
                                position: 'relative',
                                marginRight:'0',
                                // flex: '1',
                            }}
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                            /> */}
                            <Image
                                styleSheet={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                }}
                                // onClick={(props)=>{
                                //     const removedorId = props.mensagem.id
                                //     const NovaLista = props.listaDeMensagens.filter(props.mensagem.id !== removedorId)
                                //     setListaDeMensagens(NovaLista)
                                // }}
                                src={`https://i.imgur.com/bVCudQQ.png`}
                            />
                        </Box>
                        {mensagem.texto}
                    </Text>
                );
            })}


        </Box>
    )
}