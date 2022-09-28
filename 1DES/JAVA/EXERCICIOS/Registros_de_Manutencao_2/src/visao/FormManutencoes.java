package visao;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.util.Currency;
import java.util.Locale;

import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

import controle.ProcessaManutencoes;
import modelo.Manutencao;

public class FormManutencoes extends JDialog implements ActionListener {
	private static final long serialVersionUID = 1L;
	private JPanel panel;
	private JLabel Lid, Ldata, Lequipamento, Lcusto, Ltempo, rotulos;
	private JTextField id, data, equipamento, custo, tempo;
	private JButton cadastrar, alterar, excluir, buscar;
	private JTable table;
	private JScrollPane rolagem; 
	private DefaultTableModel tableModel;
	private int autoId = ProcessaManutencoes.manutencoes.get(ProcessaManutencoes.manutencoes.size() - 1).getId() + 1;
	private final Locale Brasil = new Locale("pt", "BR");
	private DecimalFormat df = new DecimalFormat("#.00");

	FormManutencoes() {
		setTitle("Registro de Manutenções");
		setBounds(500, 200, 470, 400);
		panel = new JPanel();
		setContentPane(panel);
		setLayout(null);
		panel.setBackground(new Color(204, 255, 229));

		Lid = new JLabel("Id:");
		Lid.setBounds(20, 20, 100, 30);
		panel.add(Lid);

		Ldata = new JLabel("Data:");
		Ldata.setBounds(20, 55, 100, 30);
		panel.add(Ldata);

		Lequipamento = new JLabel("Equipamento:");
		Lequipamento.setBounds(20, 90, 120, 30);
		panel.add(Lequipamento);

		Lcusto = new JLabel("Custo:");
		Lcusto.setBounds(20, 120, 115, 30);
		panel.add(Lcusto);

		Ltempo = new JLabel("Tempo: (H)");
		Ltempo.setBounds(20, 155, 120, 30);
		panel.add(Ltempo);

		id = new JTextField(String.format("%d", autoId));
		id.setEnabled(false);
		id.setBounds(135, 20, 100, 30);
		panel.add(id);

		data = new JTextField();
		data.setBounds(135, 55, 100, 30);
		panel.add(data);

		equipamento = new JTextField();
		equipamento.setBounds(135, 90, 100, 30);
		panel.add(equipamento);

		custo = new JTextField();
		custo.setBounds(135, 130, 100, 30);
		panel.add(custo);

		tempo = new JTextField();
		tempo.setBounds(135, 165, 100, 30);
		panel.add(tempo);

		
		table = new JTable();
		tableModel = new DefaultTableModel();
		tableModel.addColumn("Id");
		tableModel.addColumn("Data");
		tableModel.addColumn("Equipamento");
		tableModel.addColumn("Custo");
		tableModel.addColumn("Tempo (h)");
		tableModel.addColumn("Total");
		if(ProcessaManutencoes.manutencoes.size() !=0) {
			preencherTabela();
		}
		
		table= new JTable(tableModel);
		table.setEnabled(false);;
		rolagem = new JScrollPane(table);
		rolagem.setBounds(20, 250, 420, 100);
		panel.add(rolagem);
		
		
		cadastrar = new JButton("Cadastrar");
		buscar = new JButton("Consultar");
		alterar = new JButton("Alterar");
		excluir = new JButton("Excluir");

		cadastrar.setBounds(335, 50, 100, 30);
		buscar.setBounds(335, 90, 100, 30);
		alterar.setBounds(335, 130, 100, 30);
		excluir.setBounds(335, 170, 100, 30);

		panel.add(cadastrar);
		panel.add(buscar);
		panel.add(alterar);
		panel.add(excluir);

		cadastrar.addActionListener(this);
		buscar.addActionListener(this);
		alterar.addActionListener(this);
		excluir.addActionListener(this);

		alterar.setEnabled(false);
		excluir.setEnabled(false);

	}

	int obterIndiceManutencoes(String manutencao) {
		switch (manutencao) {
		case "motor":
			return 0;
		case "compressor":
			return 1;
		case "carburador":
			return 2;
		default:
			return -1;
		}
	}

	private void preencherTabela() {
		int totlinhas = tableModel.getRowCount();
		if(tableModel.getRowCount()> 0) {
			for(int i=0; i<totlinhas;i++) {
				tableModel.removeRow(0);
			}
		}
		for(Manutencao m : ProcessaManutencoes.manutencoes) {
			tableModel.addRow(new String[] { m.getId("s"), m.getData("s"), m.getEquipamento(), m.getCustoHora("s"), m.getTempoGasto("s"),m.getTotal()});
		}
			
		}
				private void cadastrar() {
		if (data.getText().length() != 0 && equipamento.getText().length() != 0 && custo.getText().length() != 0
				&& tempo.getText().length() != 0) {
			df.setCurrency(Currency.getInstance(Brasil));
			double cus, tem;
			try {
				cus = Double.parseDouble(df.parse(custo.getText()).toString());
				tem = Double.parseDouble(df.parse(tempo.getText()).toString());
			} catch (ParseException e) {
				System.out.println(e);
				cus = 0;
				tem = 0;
			}
			ProcessaManutencoes.manutencoes
					.add(new Manutencao(autoId, data.getText(), equipamento.getText(), cus, tem));
			autoId++;
			preencherTabela();
			limparCampos();
			ProcessaManutencoes.salvar();
		} else {
			JOptionPane.showMessageDialog(this, "Por favor, preencha todos os campos");
		}
		
	}

	private void buscar() {
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
			Manutencao manu = new Manutencao(iid);
			if (ProcessaManutencoes.manutencoes.contains(manu)) {
				int indice = ProcessaManutencoes.manutencoes.indexOf(manu);
				id.setText(ProcessaManutencoes.manutencoes.get(indice).getId("s"));
				data.setText(ProcessaManutencoes.manutencoes.get(indice).getData("s"));
				equipamento.setText(ProcessaManutencoes.manutencoes.get(indice).getEquipamento());
				custo.setText(ProcessaManutencoes.manutencoes.get(indice).getCustoHora("s"));
				tempo.setText(ProcessaManutencoes.manutencoes.get(indice).getTempoGasto("s"));
				cadastrar.setEnabled(false);
				alterar.setEnabled(true);
				excluir.setEnabled(true);
				ProcessaManutencoes.salvar();

		} else {
			JOptionPane.showMessageDialog(this, "Manutenção não encontrada!");
		}
		
	}
}

	private void alterar() {
		int idd = Integer.parseInt(id.getText());
		Manutencao manut = new Manutencao(idd);
		int indice = ProcessaManutencoes.manutencoes.indexOf(manut);
		if (data.getText().length() != 0 && equipamento.getText().length() != 0 && custo.getText().length() != 0
				&& tempo.getText().length() != 0) {
			df.setCurrency(Currency.getInstance(Brasil));
			double cus, temp;
			try {
				cus = Double.parseDouble(df.parse(custo.getText()).toString());
				temp = Double.parseDouble(df.parse(tempo.getText()).toString());
			} catch (ParseException e) {
				System.out.println(e);
				cus = 0;
				temp = 0;
			}
			ProcessaManutencoes.manutencoes.set(indice,
					new Manutencao(idd, data.getText(), equipamento.getText(), cus, temp));
			preencherTabela();
			limparCampos();
			ProcessaManutencoes.salvar();
		} else {
			JOptionPane.showMessageDialog(this, "Por favor, preencher todos os campos");
		}
		cadastrar.setEnabled(true);
		alterar.setEnabled(false);
		excluir.setEnabled(false);
		id.setText(String.format("%d", autoId));
		
	}

	private void excluir() {
		int idd = Integer.parseInt(id.getText());
		Manutencao manutenco = new Manutencao(idd);
		int indice = ProcessaManutencoes.manutencoes.indexOf(manutenco);
		ProcessaManutencoes.manutencoes.remove(indice);
		preencherTabela();
		limparCampos();
		cadastrar.setEnabled(true);
		alterar.setEnabled(false);
		excluir.setEnabled(false);
		id.setText(String.format("%d", autoId));
		ProcessaManutencoes.salvar();

	}

	private void limparCampos() {
		id.setText(String.format("%d", autoId));
		data.setText(null);
		equipamento.setText(null);
		custo.setText(null);
		tempo.setText(null);
	}

	public static void main(String args[]) {
		ProcessaManutencoes.abrir();
		FormManutencoes tela = new FormManutencoes();
		tela.setVisible(true);

	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == cadastrar) {
			cadastrar();
		}
		if (e.getSource() == buscar) {
			buscar();
		}
		if (e.getSource() == alterar) {
			alterar();
		}
		if (e.getSource() == excluir) {
			excluir();
		}
	}
}
