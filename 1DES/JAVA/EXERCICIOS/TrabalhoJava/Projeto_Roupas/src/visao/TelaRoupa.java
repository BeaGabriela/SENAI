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
import javax.swing.JTextArea;
import javax.swing.JTextField;

import controle.VendaProcess;
import modelo.Usuario;
import modelo.Venda;

public class TelaRoupa extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	private JPanel painel;
	private JLabel nomeCliente, genClient, tipoProuduto, valProduto, descont, qtd, nomeVendedor, imagemVendedor,
			codProduto;
	private JTextField tfCliente, tfvalProduto, tfQtd, tfcod;
	private JComboBox<String> produtos, genCliente, desconto, tfVendedor;
	private JTextArea verResultado;
	private JButton cadastrar, buscarProduto, apagar, mudarVenda;
	private String imgIco = "./assents/flor.png";
	private String[] imagens = { "./assents/ana.jpg", "./assents/beatriz.jpg", "./assents/Carlos.png",
			"./assents/julia.png", "./assents/marcelo.jpg", "./assents/maria.png", "./assents/Victor.png" };
	private ImageIcon icon;
	private int autoId = VendaProcess.vendas.size() + 1;
	private String texto = "";

	TelaRoupa() {
		setTitle("Loja de Roupas");
		setBounds(450, 200, 1000, 600);
		setIconImage(new ImageIcon(imgIco).getImage());
		painel = new JPanel();
		painel.setBackground(new Color(199, 199, 199));
		setContentPane(painel);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setLayout(null);

		codProduto = new JLabel("*Código do Produto");
		codProduto.setBounds(20, 50, 120, 30);
		tfcod = new JTextField(String.format("%d", autoId));
		tfcod.setBounds(140, 55, 255, 30);
		tfcod.setEditable(false);
		//
		nomeCliente = new JLabel("*Nome do Cliente:");
		nomeCliente.setBounds(20, 90, 120, 30);
		tfCliente = new JTextField();
		tfCliente.setBounds(140, 95, 255, 30);
		//
		genClient = new JLabel("*Gênero Roupa:");
		genClient.setBounds(20, 125, 120, 30);
		genCliente = new JComboBox<String>(new String[] { "Feminina", "Masculina" });
		genCliente.setBounds(140, 130, 255, 30);
		//
		tipoProuduto = new JLabel("*Produto:");
		tipoProuduto.setBounds(20, 165, 120, 30);
		produtos = new JComboBox<String>(new String[] { "Calça Jeans", "Blusa moletom", "Vestido", "Calça Moletom",
				"Camiseta", "Blusa", "Tênis", "Salto" });
		produtos.setBounds(140, 165, 255, 30);
		//
		valProduto = new JLabel("*Valor do Produto:");
		valProduto.setBounds(20, 240, 120, 30);
		tfvalProduto = new JTextField();
		tfvalProduto.setBounds(140, 240, 255, 30);
		//
		descont = new JLabel("*Desconto:");
		descont.setBounds(20, 200, 120, 30);
		desconto = new JComboBox<String>(new String[] { "5", "10", "15", "20", "25", "30" });
		desconto.setBounds(140, 200, 255, 30);
		//
		qtd = new JLabel("*Quantidade:");
		qtd.setBounds(20, 280, 120, 30);
		tfQtd = new JTextField();
		tfQtd.setBounds(140, 280, 255, 30);
		//

		verResultado = new JTextArea();
		verResultado.setBounds(10, 350, 960, 200);
		verResultado.setEditable(false);
		verResultado.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		preencherAreaDeTexto();
		//
		nomeVendedor = new JLabel("*Nome vendedor:");
		nomeVendedor.setBounds(555, 280, 120, 30);
		tfVendedor = new JComboBox<String>(
				new String[] { "Ana", "Beatriz", "Carlos", "Julia", "Marcelo", "Maria", "Victor" });
		tfVendedor.setBounds(555, 310, 255, 30);
		//
		imagemVendedor = new JLabel();
		imagemVendedor.setBounds(565, 75, 230, 200);
		imagemVendedor.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));

		alternarImagens(0);
		//
		//

		cadastrar = new JButton("Cadastrar");
		buscarProduto = new JButton("Buscar");
		mudarVenda = new JButton("Alterar");
		apagar = new JButton("Apagar");
		cadastrar.setBounds(440, 25, 110, 30);
		buscarProduto.setBounds(565, 25, 110, 30);
		mudarVenda.setBounds(805, 25, 110, 30);
		mudarVenda.setEnabled(false);
		apagar.setBounds(685, 25, 110, 30);
		apagar.setEnabled(false);

		produtos.addActionListener(this);
		genCliente.addActionListener(this);
		desconto.addActionListener(this);
		cadastrar.addActionListener(this);
		buscarProduto.addActionListener(this);
		tfVendedor.addActionListener(this);
		apagar.addActionListener(this);
		mudarVenda.addActionListener(this);

		painel.add(codProduto);
		painel.add(tfcod);
		//
		painel.add(nomeCliente);
		painel.add(tfCliente);
		//
		painel.add(genClient);
		painel.add(genCliente);
		//
		painel.add(tipoProuduto);
		painel.add(produtos);
		//
		painel.add(valProduto);
		painel.add(tfvalProduto);
		//
		painel.add(qtd);
		painel.add(tfQtd);
		//
		painel.add(descont);
		painel.add(desconto);
		//
		painel.add(verResultado);
		//
		painel.add(nomeVendedor);
		painel.add(tfVendedor);
		//
		painel.add(imagemVendedor);
		//
		painel.add(cadastrar);
		painel.add(buscarProduto);
		//
		painel.add(apagar);
		painel.add(mudarVenda);

	}

	private void alternarImagens(int indice) {
		icon = new ImageIcon(new ImageIcon(imagens[indice]).getImage().getScaledInstance(230, 200, 100));
		imagemVendedor.setIcon(icon);
	}

	int obterIndiceDesconto(String Desconto) {
		switch (Desconto) {
		case "5":
			return 1;
		case "10":
			return 2;
		case "15":
			return 3;
		case "20":
			return 4;
		case "25":
			return 5;
		case "30":
			return 6;
		default:
			return -1;
		}
	}

	int obterIndiceVendedor(String Vendedor) {
		switch (Vendedor) {
		case "Ana":
			return 0;
		case "Beatriz":
			return 1;
		case "Carlos":
			return 2;
		case "Julia":
			return 3;
		case "Marcelo":
			return 4;
		case "Maria":
			return 5;
		case "Victor":
			return 6;
		default:
			return -1;
		}
	}

	int obterIndiceRoupa(String Roupa) {
		switch (Roupa) {
		case "Cal�a Jeans":
			return 0;
		case "Blusa moletom":
			return 1;
		case "Vestido":
			return 2;
		case "Cal�a Moletom":
			return 3;
		case "Camiseta":
			return 4;
		case "Blusa":
			return 5;
		case "T�nis":
			return 5;
		case "Salto":
			return 6;
		default:
			return -1;
		}
	}

	int obterIndiceGenero(String genero) {
		switch (genero) {
		case "Feminina":
			return 0;

		case "Masculina":
			return 1;
		default:
			return -1;
		}
	}

	private double calculoTotal() {

		double calc = (Double.parseDouble(tfvalProduto.getText().replace(",", "."))
				* Double.parseDouble(desconto.getSelectedItem().toString())) / 100;

		double total = (Double.parseDouble(tfvalProduto.getText().replace(",", ".")) - calc)
				* Double.parseDouble(tfQtd.getText().toString());

		return total;
	}

	private void cadastrar() {

		String data = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss").format(Calendar.getInstance().getTime());

		if (tfCliente.getText().length() != 0 && tfvalProduto.getText().length() != 0
				&& tfQtd.getText().length() != 0) {

			VendaProcess.vendas.add(new Venda(autoId, tfVendedor.getSelectedItem().toString(), data,
					tfCliente.getText().toString(), produtos.getSelectedItem().toString(),
					genCliente.getSelectedItem().toString(), Integer.parseInt(tfQtd.getText().toString()),
					Double.parseDouble(tfvalProduto.getText().replace(",", ".")),
					Double.parseDouble(desconto.getSelectedItem().toString()), calculoTotal()));
		} else {
			JOptionPane.showMessageDialog(this, "Favor Preencher todos as informa��es");
		}

		autoId++;
		limparCampos();
		preencherAreaDeTexto();
		VendaProcess.salvar();
	}

	private void buscar() {
		String entrada = JOptionPane.showInputDialog(this, "Digite o c�ódigo do produto:");

		boolean isNumeric = true;
		if (entrada != null) {
			for (int i = 0; i < entrada.length(); i++) {
				if (!Character.isDigit(entrada.charAt(i))) {
					isNumeric = false;
				}
			}
		} else {
			isNumeric = false;
		}
		if (isNumeric) {

			int id = Integer.parseInt(entrada);

			boolean achou = false;

			for (Venda v : VendaProcess.vendas) {
				if (v.getcodProduto() == id) {
					achou = true;
					int indice = VendaProcess.vendas.indexOf(v);
					tfcod.setText(VendaProcess.vendas.get(indice).getcodProduto("s"));
					tfCliente.setText(VendaProcess.vendas.get(indice).getCliente());
					genCliente.setSelectedIndex(obterIndiceGenero(VendaProcess.vendas.get(indice).getGeneroRoupa()));
					produtos.setSelectedIndex(obterIndiceRoupa(VendaProcess.vendas.get(indice).getProduto()));
					tfvalProduto.setText(VendaProcess.vendas.get(indice).getValor("s"));
					desconto.setSelectedIndex(obterIndiceDesconto(VendaProcess.vendas.get(indice).getDesconto("s")));
					tfQtd.setText(VendaProcess.vendas.get(indice).getQntProduto("s"));
					tfVendedor.setSelectedIndex(obterIndiceVendedor(VendaProcess.vendas.get(indice).getVendedor()));
					VendaProcess.salvar();
					cadastrar.setEnabled(false);
					mudarVenda.setEnabled(true);
					apagar.setEnabled(true);
					break;
				}

			}

			if (!achou) {
				JOptionPane.showMessageDialog(this, "Cliente n�o encontrado");
			}

		}

	}

	private void mudarVenda() {
		String data = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss").format(Calendar.getInstance().getTime());
		int Id = Integer.parseInt(tfcod.getText());
		Usuario us = new Usuario(Id);
		int indice = Integer.parseInt(tfcod.getText());

		for (Venda venda : VendaProcess.vendas) {
			if (venda.getcodProduto() == Id) {
				indice = VendaProcess.vendas.indexOf(venda);
			}
		}

		if (tfCliente.getText().length() != 0 && tfvalProduto.getText().length() != 0
				&& tfQtd.getText().length() != 0) {

			VendaProcess.vendas.set(indice,
					new Venda(Integer.parseInt(tfcod.getText()), tfVendedor.getSelectedItem().toString(), data,
							tfCliente.getText().toString(), produtos.getSelectedItem().toString(),
							genCliente.getSelectedItem().toString(), Integer.parseInt(tfQtd.getText().toString()),
							Double.parseDouble(tfvalProduto.getText().replace(",", ".")),
							Double.parseDouble(desconto.getSelectedItem().toString()), calculoTotal()));

			preencherAreaDeTexto();
			limparCampos();
			VendaProcess.salvar();
		} else {
			JOptionPane.showMessageDialog(this, "Favor preencher todos os campos.");
		}
		cadastrar.setEnabled(true);
		mudarVenda.setEnabled(false);
		apagar.setEnabled(false);
		tfcod.setText(String.format("%d", VendaProcess.vendas.size() + 1));

	}

	public void apagar() {

		int id = Integer.parseInt(tfcod.getText());
		int indice = -1;
		for (Venda manu : VendaProcess.vendas) {
			if (manu.getcodProduto() == id) {
				indice = VendaProcess.vendas.indexOf(manu);
			}

		}

		VendaProcess.vendas.remove(indice);
		preencherAreaDeTexto();
		limparCampos();
		cadastrar.setEnabled(true);
		mudarVenda.setEnabled(false);
		apagar.setEnabled(false);
		VendaProcess.salvar();
		tfcod.setText(String.format("%d", VendaProcess.vendas.size() + 1));
	}

	private void limparCampos() {
		tfCliente.setText(null);
		tfQtd.setText(null);
		tfvalProduto.setText(null);
	}

	private void preencherAreaDeTexto() {
		texto = "";
		for (Venda p : VendaProcess.vendas) {
			texto += p.toString() + "\n";
		}
		verResultado.setText(texto);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == tfVendedor) {
			alternarImagens(tfVendedor.getSelectedIndex());
		}
		if (e.getSource() == cadastrar) {
			cadastrar();
		}
		if (e.getSource() == buscarProduto) {
			buscar();
		}
		if (e.getSource() == mudarVenda) {
			mudarVenda();
		}
		if (e.getSource() == apagar) {
			apagar();
		}
	}

}