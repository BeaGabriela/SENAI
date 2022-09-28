


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
	private JLabel rotulo1, rotulo2;
	private JTextField Email, Senha;
	private JButton login;
	
	Tela_Login(){
		//Propriedades Basicas;
		setTitle("Tela de Login");
		setBounds(1400, 100, 400, 200);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel();
		setContentPane(painel);
		setLayout(null);
		
		//Conteudo da tela
		rotulo1= new JLabel("Email: ");
		rotulo1.setBounds(20,20,100,20);
		
		Email= new JTextField();
		Email.setBounds(120,20,200,20);
		
		rotulo2=new JLabel("Senha: ");
		rotulo2.setBounds(20,60,100,20);
		
		Senha=new JTextField();
		Senha.setBounds(120,60,200,20);
		
		login = new JButton("Login");
		login.setBounds(120,100,200,30);
		
		painel.add(rotulo1);
		painel.add(rotulo2);
		painel.add(Email);
		painel.add(Senha);
		painel.add(login);
	}

	public static void main(String[] args) {
		Tela_Login tela = new Tela_Login();
		tela.setVisible(true);
		

	}

}

