package visao;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JTextField;

import controle.Usuario_Processa;
import controle.VendaProcess;
import uteis.Cripto;

public class TelaLogin extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;

	private JPanel painel;
	private JLabel email, senha, image;
	private JTextField tfemail;
	private JPasswordField tfsenha;
	private JButton login;
	private String imgIco = ".\\assents\\Lotus_de_Seda_2-removebg-preview.png";
	private ImageIcon icon;
	private String[] imagem = { ".\\assents\\Lotus_de_Seda_2-removebg-preview.png" };

	TelaLogin() {

		setTitle("Login");
		setBounds(570, 100, 795, 620);
		setIconImage(new ImageIcon(imgIco).getImage());
		painel = new JPanel();
		painel.setBackground(new Color(201, 200, 227, 83));
		setContentPane(painel);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setLayout(null);

		image = new JLabel("");
		image.setBounds(215, 25, 370, 400);
		imagem(0);
		//
		email = new JLabel("E-mail:");
		email.setBounds(240, 440, 120, 40);
		tfemail = new JTextField();
		tfemail.setBounds(285, 445, 233, 35);
		//
		senha = new JLabel("Senha:");
		senha.setBounds(240, 484, 120, 40);
		tfsenha = new JPasswordField();
		tfsenha.setEchoChar('*');
		tfsenha.setBounds(285, 489, 233, 35);
		//
		login = new JButton("Login");
		login.setBounds(325, 535, 110, 30);

//		setTitle("Tela de Login");
//		setBounds(600, 300, 360, 200);
//		setDefaultCloseOperation(EXIT_ON_CLOSE);
//		painel = new JPanel(); 
//		setContentPane(painel); 
//		setLayout(null);
//
//
//		rotulo1 = new JLabel("Email:");
//		rotulo1.setBounds(20, 20, 100, 20);
//		email = new JTextField();
//		email.setBounds(120, 20, 200, 30);
//		rotulo2 = new JLabel("Senha:");
//		rotulo2.setBounds(20, 60, 100, 20);
//		senha = new JPasswordField();
//		senha.setEchoChar('*');
//		senha.setBounds(120, 60, 200, 30);
//		login = new JButton("Login");
//		login.setBounds(120, 100, 200, 30);

		login.addActionListener(this);

		painel.add(tfemail);
		painel.add(email);
		painel.add(tfsenha);
		painel.add(senha);
		painel.add(login);
		painel.add(image);
	}

	private void imagem(int indice) {
		icon = new ImageIcon(new ImageIcon(imgIco).getImage().getScaledInstance(370, 400, 100));
		image.setIcon(icon);

	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == login) {
			if (tfemail.getText().length() > 0 && new String(tfsenha.getPassword()).length() > 0) {
				int indice = Usuario_Processa.checarEmail(tfemail.getText());
				String adm = "admin@admin.com";
				if (tfemail.getText().equals(adm)) {
					if (Usuario_Processa.checarSenha(indice, new String(tfsenha.getPassword()))) {
						this.dispose();
						Usuario_Crud uc = new Usuario_Crud();
						uc.setVisible(true);
					} else {
						JOptionPane.showMessageDialog(this, "Acesso negado");
					}
				} else {
					if (indice != -1) {
						if (Usuario_Processa.checarSenha(indice, new String(tfsenha.getPassword()))) {
							this.dispose();
							TelaRoupa tr = new TelaRoupa();
							tr.setVisible(true);
						} else {
							JOptionPane.showMessageDialog(this, "Acesso negado");
						}
					} else {
						JOptionPane.showMessageDialog(this, "Usuário não encontrado");
					}
				}
			} else {
				JOptionPane.showMessageDialog(this, "Preencha o email e a senha");
			}
		}
	}

	public static void main(String[] args) {
		Usuario_Processa.carregar();
		VendaProcess.abrir();
		TelaLogin login = new TelaLogin();
		login.setVisible(true);
	}

	public void setModal(boolean b) {
		// TODO Auto-generated method stub

	}
}