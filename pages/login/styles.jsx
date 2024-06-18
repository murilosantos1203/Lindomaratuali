import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    caixa: {
        width: '80%',
        borderRadius: 30,
        borderColor: 'black',
        padding: 8,
        fontSize: 20,
        color: 'black',
        marginTop: 10,
        borderWidth: 1,
    },
    logomarca: {
        width: 200, 
        height: 130, 
        resizeMode: 'contain', 
        borderColor: 'black', 
        marginBottom: 20,
    },
    caixas: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    btnLogin: {
        color: 'white',
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 30,
        width: '40%',
        height: 50,
        backgroundColor: '#317176',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signInConteiner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textSign: {
        fontSize: 17,
        color: 'white',
    },
    btnSignIn: {
        fontSize: 17,
        color: '#317176',
        margin: 10,
    },
    header: {
        alignItems: 'flex-start', // Alinha os itens à esquerda
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%', // Ajusta a largura do contêiner para 100% para cobrir toda a tela
        padding: 20, // Adiciona um pouco de padding para espaçamento
    },
});

export default styles;
