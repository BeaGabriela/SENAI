package visao;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;

import controle.UsuarioProcessa;

public class Tela_Login extends JFrame implements ActionListener{

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
		login.addActionListener(this);
		
		painel.add(rotulo1);
		painel.add(rotulo2);
		painel.add(Email);
		painel.add(Senha);
		painel.add(login);
	}

	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == login) {
			int indice = UsuarioProcessa.checarEmail(Email.getText());
			if (indice != -1) {
				if (UsuarioProcessa.checarSenha(indice, Senha.getText())) {
					JOptionPane.showMessageDialog(this, "Acesso permitido");
					this.dispose();// Fecha o Formulário
				} else {
					JOptionPane.showMessageDialog(this, "Acesso negado");
				}
			} else {
				JOptionPane.showMessageDialog(this, "Usuário não encontrado");
			}
		}
	}

	public static void main(String[] args) {
		UsuarioProcessa.carregar();
		Tela_Login tela = new Tela_Login();
		tela.setVisible(true);
	}
}

		
	