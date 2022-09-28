package visao;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;

import controle.Processamento;

public class Tela_Login extends JFrame implements ActionListener{

	private static final long serialVersionUID = 1L;
	//Atributos
	private JPanel painel;
	private JLabel rotulo1, rotulo2;
	private JTextField Nome, Ano;
	private JButton Calcular;
	
	Tela_Login(){
		//Propriedades Basicas;
		setTitle("Tela de Login");
		setBounds(1400, 100, 400, 100);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel();
		setContentPane(painel);
		setLayout(null);
		
		//Conteudo da tela

		Calcular = new JButton("Calcular a Idade");
		Calcular.setBounds(90,20,200,20);
		Calcular.addActionListener(this);
		
	
		painel.add(Calcular);
	}

//	@Override
//	public void actionPerformed(ActionEvent e) {
//		// TODO Auto-generated method stub
//		
//	}


//	public void actionPerformed(ActionEvent e) {
//		if (e.getSource() == Calcular) {
//			int indice = Processamento.checarNome(Nome.getText());
//			if (indice != -1) {
//				if (Processamento.checarAno(indice, Ano.getText())) {
//					JOptionPane.showMessageDialog(this, "Acesso permitido");
//					this.dispose();// Fecha o Formulário
//				} else {
//					JOptionPane.showMessageDialog(this, "Acesso negado");
//				}
//			} else {
//				JOptionPane.showMessageDialog(this, "Usuário não encontrado");
//			}
//		}
//	}
//
	public static void main(String[] args) {
		Processamento.carregar();
		Tela_Login tela = new Tela_Login();
		tela.setVisible(true);
}

@Override
public void actionPerformed(ActionEvent e) {
	// TODO Auto-generated method stub
	
}
	}

		
	