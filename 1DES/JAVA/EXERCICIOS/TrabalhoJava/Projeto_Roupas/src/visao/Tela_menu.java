package visao;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JPanel;

import controle.Usuario_Processa;
import modelo.Usuario;

public class Tela_menu extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	private JPanel panel;
	private JMenuBar barraMenu = new JMenuBar();
	private JMenu menuArquivo, menuSistema;
	private JMenuItem itemProdutos, itemVendas, itemRelatorios, itemSair;
	private ImageIcon fundo = new ImageIcon(".\\assents\\lotus.png");
	private String imgIco = ".\\assets\\lotus.png";
	private JLabel lbFundo = new JLabel();

	Tela_menu() {
		// COnfigurações do Form principal
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setTitle("Lótus de Seda - Loja de Roupas");
		setIconImage(new ImageIcon(imgIco).getImage());
		setBounds(900, 150, 700, 500);
		panel = new JPanel();
		setJMenuBar(barraMenu);
		setContentPane(panel);
		setLayout(null);

		// Barra de Menús
		menuArquivo = new JMenu("Arquivo");
		menuSistema = new JMenu("Sistema");
		barraMenu.add(menuArquivo);
		barraMenu.add(menuSistema);
		itemProdutos = new JMenuItem("Login");
		itemRelatorios = new JMenuItem("Relatórios");
		itemSair = new JMenuItem("Sair do Sistema");
		menuArquivo.add(itemProdutos);
		menuSistema.add(itemRelatorios);
		menuSistema.add(itemSair);

		// Imagem de fundo
		lbFundo.setIcon(fundo);
		lbFundo.setBounds(80, 15, 600, 400);
		panel.add(lbFundo);

		// Ações do Menú
		itemProdutos.addActionListener(this);
		itemRelatorios.addActionListener(this);
		itemSair.addActionListener(this);
	}

	// Ações ao clicar nos ítens do menú.
	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == itemProdutos) {
			this.dispose();
			TelaLogin pf = new TelaLogin();
			pf.setModal(true);
			pf.setVisible(true);
		} else if (e.getSource() == itemRelatorios) {
			Relatorio rf = new Relatorio();
			rf.setModal(true);
			rf.setVisible(true);
		} else {
			dispose();
		}
	}

	// Método Main que abre o Form principal e carrega os arquivos
	public static void main(String[] args) {
		// Abre o formulário principal
		Usuario_Processa.carregar();
		Tela_menu mf = new Tela_menu();
		mf.setVisible(true);
	}

}
