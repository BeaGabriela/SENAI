
package visao;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.util.Currency;
import java.util.Locale;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JTextArea;
import javax.swing.JTextField;

import Controle.ProcessaManutencoes;
import modelo.Manutencao;

public class FormManutencoes extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	// Atributos da tela
	private JPanel panel;
	private JTextField id, data, equipamento, custo, tempo, tflista;
	private JButton cadastrar, alterar, excluir, buscar;
	private JTextArea listar;
	private JLabel lid, ldata, lequipamento, lcusto, ltempo;
	
	private int autoId= ProcessaManutencoes.manutencao.size()+1;
	
	private final Locale BRASIL = new Locale("pt", "BR");
	private DecimalFormat df = new DecimalFormat("#.00");

	FormManutencoes() {
		setTitle("Registro de Manutenções");
		setBounds(500, 200, 470, 400);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		panel = new JPanel();
		setContentPane(panel);
		setLayout(null);

		
		lid = new JLabel ("Id:");
		lid. setBounds(20, 20, 100, 30);
		panel. add (lid);
		
		ldata = new JLabel ("Data:");
		ldata. setBounds(20, 55, 100, 30);
		panel. add (ldata);
		
		lequipamento = new JLabel ("Equipamento:");
		lequipamento. setBounds(20, 90, 120, 30);
		panel. add (lequipamento);
		
		lcusto = new JLabel ("Custo:");
		lcusto. setBounds(20, 120, 115, 30);
		panel. add (lcusto);
		
		ltempo = new JLabel ("Tempo:");
		ltempo. setBounds(20, 155, 120, 30);
		panel. add (ltempo);

		
		
		id = new JTextField();
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

		listar = new JTextArea("");
		listar. setBounds (20, 300, 120, 30);
		tflista = new JTextField();
		tflista. setBounds (30, 235, 400, 120);
		panel.add(tflista);
		
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

	private void limparCampos() {
		id.getText();
		data.getText();
		equipamento.getText();
		custo.getText();
		tempo.getText();
	}

	private void cadastrar() {
		if (id.getText().length() !=0 && data.getText().length() != 0 && equipamento.getText().length()!=0 && custo.getText().length() != 0 && tempo.getText().length()!=0) {
			df.setCurrency(Currency.getInstance(BRASIL));
			double custoInfo, tempoInfo;
			try {
				custoInfo = Double.parseDouble(df.parse(custo.getText()).toString());
				tempoInfo = Double.parseDouble(df.parse(tempo.getText()).toString());
			} catch (ParseException e) {
				System.out.println(e);
				custoInfo = 0;
				tempoInfo = 0;
			}
			ProcessaManutencoes.manutencao.add(new Manutencao(autoId, data.getText(),equipamento.getText(),custoInfo, tempoInfo));
			preencherAreaTexto();
			limparCampos();
		} else {
			JOptionPane.showMessageDialog(this, "Favor preencher todos os campos.");
		}
	}
	

	private void buscar() {
		String entrada = JOptionPane.showInputDialog(this,"Digite o Id:");

		boolean isNumeric = true;
		if (entrada != null) {
			for (int i = 0; i < entrada.length(); i++) {
				if (!Character.isDigit(entrada.charAt(i))) {
					isNumeric = false;
				}
			}
		}else {
			isNumeric = false;
		}
		if (isNumeric) {
			int Id = Integer.parseInt(entrada);
			Manutencao m = new Manutencao(Id);
			if (ProcessaManutencoes.manutencao.contains(m)) {
				int indice = ProcessaManutencoes.manutencao.indexOf(m);
				id.setText(ProcessaManutencoes.manutencao.get(indice).getId("s"));
				data.setText(ProcessaManutencoes.manutencao.get(indice).getData("s"));
				equipamento.setText(ProcessaManutencoes.manutencao.get(indice).getEquipamento());
				custo.setText(ProcessaManutencoes.manutencao.get(indice).getCustoHora("s"));
				tempo.setText(ProcessaManutencoes.manutencao.get(indice).getTempoGasto("s"));
				cadastrar.setEnabled(false);
				buscar.setEnabled(true);
				excluir.setEnabled(true);
				ProcessaManutencoes.salvar();
			} else {
				JOptionPane.showMessageDialog(this, "Pet não encontrado");
			}
		}

	}
	private void preencherAreaTexto() {
		String texto="";
		for(Manutencao m :ProcessaManutencoes.manutencao) {
			texto+=m.toString();
		}
		listar.setText(texto);
	}

	private void alterar() {
		int Id = (Integer.parseInt(id.getText()));
		Manutencao m = new Manutencao(Id);
		int indice= ProcessaManutencoes.indexOf(Id);
		
		if (id.getText().length() != 0 && data.getText().length() != 0
				&& equipamento.getText().length() != 0 && custo.getText().length() != 0
				&& tempo.getText().length() != 0) {

			// converter o peso no formato Brasileiro usando virgula;
			df.setCurrency(Currency.getInstance(BRASIL));
			double c, t;
			try {
				c = Double.parseDouble(df.parse(custo.getText()).toString());
				t = Double.parseDouble(df.parse(tempo.getText()).toString());
			} catch (ParseException e) {
				System.out.println(e);
				t = 0;
				c = 0;

			}
			ProcessaManutencoes.manutencao.set(indice,new Manutencao(Id, data.toString(), equipamento.getText(), c,
					 t));
			preencherAreaTexto();
			limparCampos();
			ProcessaManutencoes.salvar();
			
		
		} else {
			JOptionPane.showMessageDialog(this, "Por favor, preecha todos os campos.");
		}
		alterar.setEnabled(false);
		excluir.setEnabled(false);
		id.setText(String.format("%d", autoId));
	}

	private void excluir() {
		int Id = (Integer.parseInt(id.getText()));
		Manutencao manutencao = new Manutencao(Id);
		int indice= ProcessaManutencoes.manutencao.indexOf(manutencao);
		ProcessaManutencoes.manutencao.remove(indice);
		preencherAreaTexto();
		limparCampos();
		cadastrar.setEnabled(false);
		alterar.setEnabled(false);
		excluir.setEnabled(false);
		id.setText(String.format("%d", autoId));
		ProcessaManutencoes.salvar();
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

	public static void main(String[] args) {
		ProcessaManutencoes.abrir();
		FormManutencoes manutencaos = new FormManutencoes();
		manutencaos.setVisible(true);

	}
}
