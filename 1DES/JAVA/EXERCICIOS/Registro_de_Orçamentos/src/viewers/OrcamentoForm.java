package viewers;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Currency;
import java.util.Locale;

import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

import controllers.OrcamentoProcess;
import modelo.Orcamento;

public class OrcamentoForm extends JDialog implements ActionListener {

	private JPanel panel;
	private JTable table;
	private JLabel Lid, Lfornecedor, Lproduto, Lpreco, lnome;
	private JTextField id, fornecedor, produto, preco;
	private JTextField texto;
	private JScrollPane rolagem;
	private DecimalFormat df = new DecimalFormat("#.00");
	private JButton Badicionar, Balterar, Bexcluir, Bbuscar;
	private DefaultTableModel tableModel;
	private int autoId = OrcamentoProcess.orcamento.get(OrcamentoProcess.orcamento.size() - 1).getId() + 1;
	private final Locale Brasil = new Locale("pt", "BR");
	private ArrayList<Orcamento> orcamento = new ArrayList<>();

	OrcamentoForm() {
		setTitle("Registros de Orcamentos");
		setBounds(900, 250, 470, 380);
		panel = new JPanel();
		setContentPane(panel);
		setLayout(null);
		panel.setBackground(new Color(224, 255, 255));

		lnome = new JLabel("Formulário de Orçamentos");
		lnome.setBounds(150, 5, 200, 30);
		panel.add(lnome);

		Lid = new JLabel("Id:");
		Lid.setBounds(15, 40, 100, 30);
		panel.add(Lid);

		Lfornecedor = new JLabel("Fornecedor:");
		Lfornecedor.setBounds(15, 70, 100, 30);
		panel.add(Lfornecedor);

		Lproduto = new JLabel("Produto:");
		Lproduto.setBounds(15, 100, 120, 30);
		panel.add(Lproduto);

		Lpreco = new JLabel("Preço:");
		Lpreco.setBounds(15, 130, 115, 30);
		panel.add(Lpreco);

		id = new JTextField(String.format("%d", autoId));
		id.setEnabled(false);
		id.setBounds(100, 40, 150, 30);
		panel.add(id);

		fornecedor = new JTextField();
		fornecedor.setBounds(100, 70, 150, 30);
		panel.add(fornecedor);

		produto = new JTextField();
		produto.setBounds(100, 100, 150, 30);
		panel.add(produto);

		preco = new JTextField();
		preco.setBounds(100, 130, 150, 30);
		panel.add(preco);

		table = new JTable();
		tableModel = new DefaultTableModel();
		tableModel.addColumn("Id");
		tableModel.addColumn("Fornecedor");
		tableModel.addColumn("Produto");
		tableModel.addColumn("Preço");
		tableModel.addColumn("Mais barato");
		if (OrcamentoProcess.orcamento.size() != 0) {
			listarTodos();

		}

		table = new JTable(tableModel);
		table.setEnabled(false);
		rolagem = new JScrollPane(table);
		rolagem.setBounds(20, 180, 420, 120);
		panel.add(rolagem);

		Badicionar = new JButton("Adicionar");
		Bbuscar = new JButton("Buscar");
		Balterar = new JButton("Alterar");
		Bexcluir = new JButton("Excluir");

		Badicionar.setBounds(310, 40, 140, 30);
		Bbuscar.setBounds(310, 70, 140, 30);
		Balterar.setBounds(310, 100, 140, 30);
		Bexcluir.setBounds(310, 130, 140, 30);

		panel.add(Badicionar);
		panel.add(Bbuscar);
		panel.add(Balterar);
		panel.add(Bexcluir);

		Badicionar.addActionListener(this);
		Bbuscar.addActionListener(this);
		Balterar.addActionListener(this);
		Bexcluir.addActionListener(this);

		Balterar.setEnabled(false);
		Bexcluir.setEnabled(false);
	}

	int obterIndiceOrcamentos(String orca) {
		switch (orca) {
		case "Caixa":
			return 0;
		case "Maquina":
			return 1;
		default:
			return -1;
		}
	}

	public void listarTodos() {
		int totlinhas = tableModel.getRowCount();
		if (tableModel.getRowCount() > 0) {
			for (int i = 0; i < totlinhas; i++) {
				tableModel.removeRow(0);
			}
		}
		for (Orcamento o : OrcamentoProcess.orcamento) {
			tableModel.addRow(
					new String[] { o.getId("s"), o.getFornecedor(), o.getProduto(), o.getPreco("s"), o.comprar() });
		}

	}

	public void adicionar() {
		if (fornecedor.getText().length() != 0 && produto.getText().length() != 0 && preco.getText().length() != 0) {
			df.setCurrency(Currency.getInstance(Brasil));
			double prec = 0;
			boolean comprar = comparando();
			try {
				prec = Double.parseDouble(df.parse(preco.getText()).toString());
			} catch (ParseException e) {
				System.out.println(e);
			}
			OrcamentoProcess.orcamento.add(new Orcamento(autoId, fornecedor.getText().toString(),
					produto.getText().toString(), prec, comprar));
		} else {
			JOptionPane.showMessageDialog(this, "Por favor, preencha todos os campos");
		}

		autoId++;
		listarTodos();
		limparCampos();
		OrcamentoProcess.salvar();
	}

	private boolean comparando() {
		double pre = 0;
		boolean comprar = true;
		try {
			pre = Double.parseDouble(df.parse(preco.getText()).toString());
		} catch (ParseException e) {
			System.out.println(e);
			pre = 0;
		}
		for (int i = 0; i < OrcamentoProcess.orcamento.size(); i++) {
			if (OrcamentoProcess.orcamento.get(i).getProduto().contains(produto.getText())) {
				if (OrcamentoProcess.orcamento.get(i).getPreco() > pre) {
					OrcamentoProcess.orcamento.get(i).setMaisBarato(false);
					comprar = true;
				} else if ((OrcamentoProcess.orcamento.get(i).getPreco() < pre)) {
					OrcamentoProcess.orcamento.get(i).setMaisBarato(true);
					comprar = false;
				}
			}

		}
		return comprar;
	}

	private void limparCampos() {
		id.setText(String.format("%d", autoId));
		fornecedor.setText(null);
		produto.setText(null);
		preco.setText(null);
	}

	public void alterar() {
		boolean comprar = true;
		int idd = Integer.parseInt(id.getText());
		Orcamento or = new Orcamento(idd);
		int indice = OrcamentoProcess.orcamento.indexOf(or);
		if (fornecedor.getText().length() != 0 && produto.getText().length() != 0 && preco.getText().length() != 0) {
			df.setCurrency(Currency.getInstance(Brasil));
			double pre;
			try {
				pre = Double.parseDouble(df.parse(preco.getText()).toString());
			} catch (ParseException e) {
				System.out.println(e);
				pre = 0;
			}
			for (int i = 0; i < OrcamentoProcess.orcamento.size(); i++) {
				if (OrcamentoProcess.orcamento.get(i).getProduto().contains(produto.getText())) {
					if (OrcamentoProcess.orcamento.get(i).getPreco() > pre) {
						OrcamentoProcess.orcamento.get(i).setMaisBarato(false);
						comprar = true;
					}
				} else {
					comprar = true;
				}

			}
			OrcamentoProcess.orcamento.set(indice,
					new Orcamento(idd, fornecedor.getText(), produto.getText(), pre, comprar));
			listarTodos();
			limparCampos();

		} else {
			JOptionPane.showMessageDialog(this, "Por favor, preencher todos os campos");
		}
		Badicionar.setEnabled(true);
		Balterar.setEnabled(false);
		Bexcluir.setEnabled(false);
		id.setText(String.format("%d", autoId));
		
		OrcamentoProcess.salvar();

	}

	public void excluir() {
		int idd = Integer.parseInt(id.getText());
		Orcamento orc = new Orcamento(idd);
		int indice = OrcamentoProcess.orcamento.indexOf(orc);
		OrcamentoProcess.orcamento.remove(indice);
		listarTodos();
		limparCampos();
		Badicionar.setEnabled(true);
		Balterar.setEnabled(false);
		Bexcluir.setEnabled(false);
		id.setText(String.format("%d", autoId));
		OrcamentoProcess.salvar();
		
	}

	public void buscar() {
		String entrada = JOptionPane.showInputDialog(this, "Digite o Id da manutenção:");
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
			int iid = Integer.parseInt(entrada);
			Orcamento or = new Orcamento(iid);
			if (OrcamentoProcess.orcamento.contains(or)) {
				int indice = OrcamentoProcess.orcamento.indexOf(or);
				id.setText(OrcamentoProcess.orcamento.get(indice).getId("s"));
				fornecedor.setText(OrcamentoProcess.orcamento.get(indice).getFornecedor());
				produto.setText(OrcamentoProcess.orcamento.get(indice).getProduto());
				preco.setText(OrcamentoProcess.orcamento.get(indice).getPreco("s"));
				Badicionar.setEnabled(false);
				Balterar.setEnabled(true);
				Bexcluir.setEnabled(true);
				OrcamentoProcess.salvar();

			} else {
				JOptionPane.showMessageDialog(this, "Orçamento não encontrado!");
			}

		}
	}

	
	public static void main(String[] args) {
		OrcamentoProcess.abrir();
		OrcamentoForm tela = new OrcamentoForm();
		tela.setVisible(true);

	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == Badicionar) {
			adicionar();
		}
		if (e.getSource() == Bbuscar) {
			buscar();
		}
		if (e.getSource() == Balterar) {
			alterar();
		}
		if (e.getSource() == Bexcluir) {
			excluir();
		}
	}
}
