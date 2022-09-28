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
	private JLabel rotulo1, rotulo2, rotulo3, rotulo4, rotulo5;
	private JTextField Nome, N1, N2, N3;
	private JButton login;
	
	Tela_Login(){
		//Propriedades Basicas;
		setTitle("Tela de Login");
		setBounds(1400, 100, 400, 400);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel();
		setContentPane(painel);
		setLayout(null);
		
		//Conteudo da tela
		rotulo1= new JLabel("Nome: ");
		rotulo1.setBounds(20,20,100,20);
		Nome= new JTextField();
		Nome.setBounds(100,20,200,20);
		
		rotulo2=new JLabel("Nota 1: ");
		rotulo2.setBounds(20,60,100,20);
		N1=new JTextField();
		N1.setBounds(100,60,200,20);
		
		rotulo3= new JLabel("Nota 2: ");
		rotulo3.setBounds(20,100,100,20);
		N2=new JTextField();
		N2.setBounds(100,100,200,20);
		
		rotulo4= new JLabel("Nota 3: ");
		rotulo4.setBounds(20,140,100,20);
		N3=new JTextField();
		N3.setBounds(100,140,200,20);
		
		rotulo5= new JLabel();
		rotulo5.setBounds(20,180,100,20);
		login = new JButton("Login");
		login.setBounds(100,250,200,30);
		
		painel.add(rotulo1);
		painel.add(Nome);
		painel.add(rotulo2);
		painel.add(N1);
		painel.add(N2);
		painel.add(N3);
		painel.add(rotulo3);
		painel.add(rotulo4);
		painel.add(rotulo5);
		painel.add(login);
	}

	public static void main(String[] args) {
		Tela_Login tela = new Tela_Login();
		tela.setVisible(true);
		

	}

}
