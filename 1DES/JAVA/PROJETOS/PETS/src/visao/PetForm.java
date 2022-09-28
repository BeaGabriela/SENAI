package visao;

import java.awt.Color;
import java.awt.Container;
import java.awt.Image;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.geom.Area;
<<<<<<< HEAD
import java.text.ParseException;
=======
import java.text.DecimalFormat;
import java.text.ParseException;
import java.util.Currency;
import java.util.Locale;
>>>>>>> 370ad510e309e95a617dcbcc5ed2fabe2a8fc938

import javax.swing.AbstractButton;
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

import controle.PetProcessa;
<<<<<<< HEAD
=======
import modelo.Pet;


public class PetForm extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	// Atributos
	private JPanel painel;
	private JLabel r1, r2, r3, r4, r5, r6, r7, r8, imagemdoPet, rotulos;
	private JTextField id, raca, nome, peso, nascimento, dono, telefone, quadro1;
	private JButton cadastrar, buscar, alterar, excluir;

	private JComboBox especie;

	private JComboBox<String> especie;

	private JTextArea resultados;
	private String[] ImgPath = { "C:\\Users\\desenvolvimento\\Desktop\\Programas-em-Java\\PETS\\img\\h.jpg",
			"C:\\Users\\desenvolvimento\\Desktop\\Programas-em-Java\\PETS\\img\\gatos.jpg",
			"C:\\Users\\desenvolvimento\\Desktop\\Programas-em-Java\\PETS\\img\\cao.jpg",
			"C:\\Users\\desenvolvimento\\Desktop\\Programas-em-Java\\PETS\\img\\coelho.jpg",
			"C:\\Users\\desenvolvimento\\Desktop\\Programas-em-Java\\PETS\\img\\calopsita.jpg",
			"C:\\Users\\desenvolvimento\\Desktop\\Programas-em-Java\\PETS\\img\\adicionar.jpg" };


	private int autoId = PetProcessa.pets.size()+1;
	private ImageIcon icon;
	private String texto = "";

=======
	private int autoId = PetProcessa.pets.size() + 1;
	private ImageIcon icon;
	private String texto = "";

	private final Locale BRASIL = new Locale("pt", "BR");
	private DecimalFormat df = new DecimalFormat("#.00");

>>>>>>> 370ad510e309e95a617dcbcc5ed2fabe2a8fc938
	PetForm() {
		// Propriedades Basicas;
		setTitle("Formulário de PETS");
		setBounds(1000, 100, 780, 720);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel();
		setContentPane(painel);
		setLayout(null);
		painel.setBackground(new Color(204, 255, 229));

		// Conteudo da tela
		r1 = new JLabel("Id: ");
		r1.setBounds(40, 20, 100, 20);

		id = new JTextField("" + autoId);
		id.setEnabled(false);
		id.setBounds(120, 20, 250, 20);

		r2 = new JLabel("Especie: ");
		r2.setBounds(40, 60, 100, 20);

<<<<<<< HEAD
		especie = new JComboBox<Object>(
				new String[] { "Hamster", "Gato", "Cachorro", "Coelho", "Passáro", "Outros..." });
		especie.addActionListener(this);
=======
		especie = new JComboBox<String>(
				new String[] { "Hamster", "Gato", "Cachorro", "Coelho", "Passáro", "Outros..." });
>>>>>>> 370ad510e309e95a617dcbcc5ed2fabe2a8fc938
		especie.setBounds(120, 60, 250, 20);

		r3 = new JLabel("Raça: ");
		r3.setBounds(40, 100, 100, 20);

		raca = new JTextField();
		raca.setBounds(120, 100, 250, 20);

		r4 = new JLabel("Nome: ");
		r4.setBounds(40, 140, 100, 20);

		nome = new JTextField();
		nome.setBounds(120, 140, 250, 20);

		r5 = new JLabel("Peso: ");
		r5.setBounds(40, 180, 100, 20);

		peso = new JTextField();
		peso.setBounds(120, 180, 250, 20);

		r6 = new JLabel("Nascimento: ");
		r6.setBounds(40, 220, 100, 20);

		nascimento = new JTextField();
		nascimento.setBounds(120, 220, 250, 20);

		r7 = new JLabel("Dono: ");
		r7.setBounds(40, 260, 100, 20);

		dono = new JTextField();
		dono.setBounds(120, 260, 250, 20);

		r8 = new JLabel("Telefone: ");
		r8.setBounds(40, 310, 100, 20);

		telefone = new JTextField();
		telefone.setBounds(120, 310, 250, 20);

		resultados = new JTextArea();
		resultados.setBounds(40, 450, 700, 200);
		resultados.setEnabled(false);
		preencherAreaDeTexto();
<<<<<<< HEAD
		
=======
>>>>>>> 370ad510e309e95a617dcbcc5ed2fabe2a8fc938

		quadro1 = new JTextField();
		quadro1.setBounds(120, 180, 250, 20);

		cadastrar = new JButton("Cadastrar");
		cadastrar.setBounds(500, 50, 200, 30);
<<<<<<< HEAD
		cadastrar.addActionListener(this);

		buscar = new JButton("Buscar");
		buscar.setBounds(500, 90, 200, 30);
		buscar.addActionListener(this);

		alterar = new JButton("Alterar");
		alterar.setBounds(500, 130, 200, 30);
		alterar.addActionListener(this);
=======

		buscar = new JButton("Buscar");
		buscar.setBounds(500, 90, 200, 30);

		alterar = new JButton("Alterar");
		alterar.setBounds(500, 130, 200, 30);
>>>>>>> 370ad510e309e95a617dcbcc5ed2fabe2a8fc938
		alterar.setEnabled(false);

		excluir = new JButton("Excluir");
		excluir.setBounds(500, 170, 200, 30);
<<<<<<< HEAD
		excluir.addActionListener(this);
=======
>>>>>>> 370ad510e309e95a617dcbcc5ed2fabe2a8fc938
		excluir.setEnabled(false);

		imagemdoPet = new JLabel();
		imagemdoPet.setBounds(500, 230, 200, 200);
		imagemdoPet.setIcon(icon);
		alterarImage(0);

		resultados.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.black));
		imagemdoPet.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.black));

		rotulos = new JLabel(
				"Id:            Espécie:                 Pet:                 Peso:       Idade:       Dono:          Telefone:");
		rotulos.setBounds(130, 425, 500, 30);
		painel.add(rotulos);

		painel.add(r1);
		painel.add(id);
		painel.add(r2);
		painel.add(especie);
		painel.add(r3);
		painel.add(raca);
		painel.add(r4);
		painel.add(nome);
		painel.add(r5);
		painel.add(peso);
		painel.add(r6);
		painel.add(nascimento);
		painel.add(r7);
		painel.add(dono);
		painel.add(r8);
		painel.add(telefone);
		painel.add(resultados);
		painel.add(quadro1);
		painel.add(cadastrar);
		painel.add(buscar);
		painel.add(alterar);
		painel.add(excluir);
		painel.add(imagemdoPet);

		especie.addActionListener(this);
		cadastrar.addActionListener(this);
		buscar.addActionListener(this);
		alterar.addActionListener(this);
		excluir.addActionListener(this);

	}
<<<<<<< HEAD
	
=======

>>>>>>> 370ad510e309e95a617dcbcc5ed2fabe2a8fc938
	private void limparCampos() {
		nome.setText(null);
		raca.setText(null);
		peso.setText(null);
		nascimento.setText(null);
		dono.setText(null);
		telefone.setText(null);
	}
<<<<<<< HEAD
	
	private void preencherAreaDeTexto() {
		texto="";
=======

	private void preencherAreaDeTexto() {
		texto = "";
>>>>>>> 370ad510e309e95a617dcbcc5ed2fabe2a8fc938
		for (Pet p : PetProcessa.pets) {
			texto += p.toString();
		}
		resultados.setText(texto);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == especie) {
			alterarImage(especie.getSelectedIndex());
		}

		if (e.getSource() == cadastrar) {
			try {
				cadastrar();
			} catch (ParseException e1) {
				System.out.println(e1);
			}
		}

		if (e.getSource() == buscar) {
<<<<<<< HEAD

		}
		if (e.getSource() == alterar) {

		}
		if (e.getSource() == excluir) {
=======
			Buscar();
		}
		if (e.getSource() == alterar) {
				try {
					Alterar();
				} catch (ParseException e1) {
					e1.printStackTrace();
				}
		}
		if (e.getSource() == excluir) {
			Excluir();
>>>>>>> 370ad510e309e95a617dcbcc5ed2fabe2a8fc938

		}

	}
<<<<<<< HEAD

	// Create do CRUD
=======
	// Delete do CRUD
	private void Excluir() {
		int Id = (Integer.parseInt(id.getText()));
		Pet pet = new Pet(Id);
		int indice= PetProcessa.pets.indexOf(pet);
		PetProcessa.pets.remove(indice);
		preencherAreaDeTexto();
		limparCampos();
		cadastrar.setEnabled(false);
		alterar.setEnabled(false);
		excluir.setEnabled(false);
		id.setText(String.format("%d", autoId));
		PetProcessa.salvar();
	}

	//update do CRUD
>>>>>>> 370ad510e309e95a617dcbcc5ed2fabe2a8fc938
	private void cadastrar() throws ParseException {
		if (nome.getText().length() != 0 && raca.getText().length() != 0 && peso.getText().length() != 0
				&& nascimento.getText().length() != 0 && dono.getText().length() != 0
				&& telefone.getText().length() != 0) {

<<<<<<< HEAD
			PetProcessa.pets.add(new Pet(autoId, especie.getSelectedItem().toString(), nome.getText(), raca.getText(), Float.parseFloat(peso.getText()), nascimento.getText(), dono.getText(), telefone.getText()));
=======
			// converter o peso de float...
			df.setCurrency(Currency.getInstance(BRASIL));
			float p;
			try {
				p = Float.parseFloat(df.parse(peso.getText()).toString());
			} catch (ParseException e) {
				System.out.println(e);
				p = 0;

			}
			PetProcessa.pets.add(new Pet(autoId, especie.getSelectedItem().toString(), nome.getText(), raca.getText(),
					p, nascimento.getText(), dono.getText(), telefone.getText()));
>>>>>>> 370ad510e309e95a617dcbcc5ed2fabe2a8fc938
			autoId++;
			preencherAreaDeTexto();
			limparCampos();
		} else {
			JOptionPane.showMessageDialog(this, "Por favor, preecha todos os campos.");
		}
<<<<<<< HEAD
=======
		PetProcessa.salvar();
	}
	
	// Create do CRUD
	private void Alterar() throws ParseException {
		int Id = (Integer.parseInt(id.getText()));
		Pet pet = new Pet(Id);
		int indice= PetProcessa.pets.indexOf(pet);
		
		if (nome.getText().length() != 0 && raca.getText().length() != 0 && peso.getText().length() != 0
				&& nascimento.getText().length() != 0 && dono.getText().length() != 0
				&& telefone.getText().length() != 0) {

			// converter o peso no formato Brasileiro usando virgula;
			df.setCurrency(Currency.getInstance(BRASIL));
			float p;
			try {
				p = Float.parseFloat(df.parse(peso.getText()).toString());
			} catch (ParseException e) {
				System.out.println(e);
				p = 0;

			}
			PetProcessa.pets.set(indice,new Pet(Id, especie.getSelectedItem().toString(), nome.getText(), raca.getText(),
					p, nascimento.getText(), dono.getText(), telefone.getText()));
			preencherAreaDeTexto();
			limparCampos();
			PetProcessa.salvar();
			
		
		} else {
			JOptionPane.showMessageDialog(this, "Por favor, preecha todos os campos.");
		}
		alterar.setEnabled(false);
		excluir.setEnabled(false);
		id.setText(String.format("%d", autoId));
>>>>>>> 370ad510e309e95a617dcbcc5ed2fabe2a8fc938
	}

	public void alterarImage(int indice) {
		icon = new ImageIcon(new ImageIcon(ImgPath[indice]).getImage().getScaledInstance(260, 200, 100));
		imagemdoPet.setIcon(icon);
	}

<<<<<<< HEAD
	public static void main(String[] args) throws ParseException {
		PetProcessa.carregarTestes();
=======
	// Retornar indice da especie
	int ObterIndicedaEspecie(String especie) {

		switch (especie) {
		case "Hamster":
			return 0;
		case "Gato":
			return 1;
		case "Cão":
			return 2;
		case "Coelho":
			return 3;
		case "Calopsita":
			return 4;
		default:
			return -1;
		}

	}
	
	// Read do CRUD
	private void Buscar() {
		String entrada = JOptionPane.showInputDialog("Digite o id do animal: ");
		int ID = Integer.parseInt(entrada);
		Pet pet = new Pet(ID);
		if (PetProcessa.pets.contains(pet)) {
			int indice = PetProcessa.pets.indexOf(pet);
			id.setText(PetProcessa.pets.get(indice).getId("s"));
			especie.setSelectedIndex(ObterIndicedaEspecie(PetProcessa.pets.get(indice).getEspecie()));
			nome.setText(PetProcessa.pets.get(indice).getNome());
			raca.setText(PetProcessa.pets.get(indice).getRaca());
			peso.setText(PetProcessa.pets.get(indice).getPeso("s"));
			nascimento.setText(PetProcessa.pets.get(indice).getNascimento("s"));
			dono.setText(PetProcessa.pets.get(indice).getDono());
			telefone.setText(PetProcessa.pets.get(indice).getTelefone());
		} else {
			JOptionPane.showMessageDialog(this, "Pet não encontrado");
		}
		cadastrar.setEnabled(false);
		alterar.setEnabled(true);
		excluir.setEnabled(true);

	}

	public static void main(String[] args) throws ParseException {
		PetProcessa.abrir();
>>>>>>> 370ad510e309e95a617dcbcc5ed2fabe2a8fc938
		PetForm tela = new PetForm();
		tela.setVisible(true);

	}
}
