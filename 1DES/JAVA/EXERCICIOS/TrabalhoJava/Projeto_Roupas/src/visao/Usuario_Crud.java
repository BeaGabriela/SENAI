
package visao;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

import controle.Usuario_Processa;
import modelo.Usuario;
import uteis.Cripto;

public class Usuario_Crud extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	private JPanel painel;
	private JLabel lbEmail, lbSenha;
	private JButton cadastrar, buscarProduto, apagar, mudarVendedor, vendas;
	private String[] usuarioss = { "Maria@gmail.com", "Carlos@gmail.com", "Marcelo@gmail.com", "Julia@gmail.com",
			"Ana@gmail.com", "Beatriz@gmail.com", "Victor@gmail.com", "admin@admin.com" };
	private String texto = "";
	private JTextField tfEmail;
	private JPasswordField pfSenha;
	private JScrollPane scroll;
	private JTable table;
	private DefaultTableModel tableModel;
	private int indice = -1;

	Usuario_Crud() {

		setTitle("Gerenciamento de Vendedores");
		setBounds(500, 200, 880, 550);
		painel = new JPanel();
		painel.setBackground(new Color(199, 199, 199));
		setContentPane(painel);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setLayout(null);

		lbEmail = new JLabel("E-mail:");
		lbEmail.setBounds(230, 20, 100, 30);
		painel.add(lbEmail);

		lbSenha = new JLabel("Senha:");
		lbSenha.setBounds(230, 55, 100, 30);
		painel.add(lbSenha);

		tfEmail = new JTextField();
		tfEmail.setBounds(320, 20, 300, 30);
		painel.add(tfEmail);

		pfSenha = new JPasswordField();
		pfSenha.setEchoChar('*');
		pfSenha.setBounds(320, 55, 300, 30);
		painel.add(pfSenha);

		cadastrar = new JButton("Cadastrar");
		buscarProduto = new JButton("Buscar");
		mudarVendedor = new JButton("Alterar");
		apagar = new JButton("Excluir");
		vendas = new JButton("Vendas");

		cadastrar.setBounds(150, 140, 100, 30);
		buscarProduto.setBounds(257, 140, 100, 30);
		mudarVendedor.setBounds(366, 140, 100, 30);
		mudarVendedor.setEnabled(false);
		apagar.setBounds(475, 140, 100, 30);
		apagar.setEnabled(false);
		vendas.setBounds(585, 140, 100, 30);

		cadastrar.addActionListener(this);
		buscarProduto.addActionListener(this);
		vendas.addActionListener(this);
		apagar.addActionListener(this);

		//
		painel.add(cadastrar);
		painel.add(buscarProduto);
		//
		painel.add(apagar);
		painel.add(mudarVendedor);
		painel.add(vendas);

		tableModel = new DefaultTableModel();
		tableModel.addColumn("Email Vendedor");
		tableModel.addColumn("Senha");
		if (Usuario_Processa.usuarios.size() != 0) {
			preencheTabela();
		}

		table = new JTable(tableModel);
		table.setEnabled(false);
		scroll = new JScrollPane(table);
		scroll.setBounds(50, 260, 760, 200);
		painel.add(scroll);

	}

	private void preencheTabela() {
		int totLinhas = tableModel.getRowCount();
		if (tableModel.getRowCount() > 0) {
			for (int i = 0; i < totLinhas; i++) {
				tableModel.removeRow(0);
			}
		}

		for (Usuario u : Usuario_Processa.usuarios) {
			tableModel.addRow(new String[] { u.getEmail(), u.getSenha() });
		}
	}

	private void limparCampos() {
		tfEmail.setText("");
		pfSenha.setText("");
	}

	private void cadastrar() {
		if (tfEmail.getText().length() > 0 && new String(pfSenha.getPassword()).length() > 3) {
			Usuario user = new Usuario(tfEmail.getText(), (new String(pfSenha.getPassword())));
			if (Usuario_Processa.usuarios.contains(user)) {
				JOptionPane.showMessageDialog(this, "Usuário já cadastrado");
			} else {
				Usuario_Processa.usuarios.add(user);
				Usuario_Processa.salvar();
				preencheTabela();
				limparCampos();
			}
		} else {
			JOptionPane.showMessageDialog(this, "Preencha o email e a senha de no mínimo 4 dígitos");
		}
	}

	private void buscar() {
		if (tfEmail.getText().length() > 0) {
			Usuario user = new Usuario(tfEmail.getText(), "");
			if (Usuario_Processa.usuarios.contains(user)) {
				indice = Usuario_Processa.usuarios.indexOf(user);
				tfEmail.setEnabled(false);
				cadastrar.setEnabled(false);
				buscarProduto.setEnabled(false);
				mudarVendedor.setEnabled(true);
				apagar.setEnabled(true);
			} else {
				JOptionPane.showMessageDialog(this, "Usuário não encontrado");
			}
		} else {
			JOptionPane.showMessageDialog(this, "Preencha o campo email");
		}
	}

	private void alterar() {
		if (tfEmail.getText().length() > 0 && new String(pfSenha.getPassword()).length() > 3) {
			Usuario user = new Usuario(tfEmail.getText(), (new String(pfSenha.getPassword())));
			Usuario_Processa.usuarios.set(indice, user);
			Usuario_Processa.salvar();
			preencheTabela();
			limparCampos();
			tfEmail.setEnabled(true);
			cadastrar.setEnabled(true);
			buscarProduto.setEnabled(true);
			mudarVendedor.setEnabled(false);
			apagar.setEnabled(false);
		} else {
			JOptionPane.showMessageDialog(this, "Preencha o email e a senha de no mínimo) 4 dígitos");
		}
	}

	private void apagar() {
		Usuario_Processa.usuarios.remove(indice);
		Usuario_Processa.salvar();
		preencheTabela();
		limparCampos();
		tfEmail.setEnabled(true);
		cadastrar.setEnabled(true);
		buscarProduto.setEnabled(true);
		mudarVendedor.setEnabled(false);
		apagar.setEnabled(false);
	}

	private void vendas() {
		this.dispose();
		TelaLogin telaLogin = new TelaLogin();
		telaLogin.setVisible(true);

	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == cadastrar) {
			cadastrar();
		}
		if (e.getSource() == buscarProduto) {
			buscar();
		}
		if (e.getSource() == mudarVendedor) {
			alterar();
		}
		if (e.getSource() == apagar) {
			apagar();
		}
		if (e.getSource() == vendas) {
			vendas();
		}
	}

}
