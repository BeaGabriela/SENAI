package visao;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class Tela_Login extends JFrame{

	private static final long serialVersionUID = 1L;
	//Atributos
	private JPanel painel;
	private JTextField numeros;
	private JButton Embaralhar;
	
	Tela_Login(){
		//Propriedades Basicas;
		setTitle("Tela de Login");
		setBounds(1400, 100, 400, 100);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel();
		setContentPane(painel);
		setLayout(null);
		
		//Conteudo da tela
		
		
		
		Embaralhar = new JButton("Emabaralhar");
		Embaralhar.setBounds(100,15,200,30);
		
	
		
		painel.add(Embaralhar);
	}

	public static void main(String[] args) {
		Tela_Login tela = new Tela_Login();
		tela.setVisible(true);
		

	}

}

