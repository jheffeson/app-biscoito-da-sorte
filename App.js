import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'A sorte favorece a mente bem preparada. Sua próxima grande oportunidade está mais perto do que imagina.',
      'Um antigo amor voltará a fazer parte dos seus dias, trazendo renovada alegria.',
      'A viagem que você está planejando será repleta de descobertas maravilhosas e memórias duradouras.',
      'A paciência que você cultiva hoje será recompensada com sucesso amanhã.',
      'Alguém admirará muito sua honestidade e integridade em um futuro próximo.',
      'Boas notícias chegarão até você por meio de uma mensagem inesperada.',
      'Seu talento criativo florescerá. Confie em sua intuição e dê vida às suas ideias.',
      'A perseverança é a chave para desbloquear portas que pareciam permanentemente fechadas.',
      'Um sorriso é o seu passe universal para instantaneamente melhorar o dia de qualquer pessoa, incluindo o seu.',
      'O sucesso não é um destino, mas a coragem para percorrer o caminho que você teme seguir.',
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./src/biscoitoAberto.png'),
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.desenvolvedor}>Dev: Jheffeson Pereira Leal</Text>
        <Image source={this.state.img} style={styles.img} />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  img: {
    width: 250,
    height: 259,
  },
  desenvolvedor: {
    color: '#dd7b22',
    fontStyle: 'italic',
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});
export default App;
