package visao;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JFileChooser;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.filechooser.FileNameExtensionFilter;

import controle.Usuario_Processa;
import controle.VendaProcess;
import controle.ProcessaRelatorio;
import modelo.Venda;

public class Relatorio extends JDialog implements ActionListener {

	private static final long serialVersionUID = 1L;
	private JPanel panel;
	private JTextArea areaDeTexto;
	private JScrollPane scroll;
	private String dados;
	private JButton btSalvar = new JButton("Salvar");
	private String imgIco = ".\\assets\\icone.png";

	Relatorio() {
		// Propriedades do Formulário
		setTitle("Relatório de Vendas");
		setBounds(200, 149, 700, 450);
		setIconImage(new ImageIcon(imgIco).getImage());
		panel = new JPanel();
		setContentPane(panel);
		setLayout(null);

		dados = "\n\t\t\tRelatório de Vendas\n";
		dados += "\t-----------------------------------------------------------------------------------------------------------------------------------\n";
		dados += "\tId\tHora\tProduto\tQuantidade\tDesconto\n";
		dados += "\t-----------------------------------------------------------------------------------------------------------------------------------\n";
		String ultimaData = "";
		double total = 0;
		for (Venda c : VendaProcess.vendas) {
			if (!ultimaData.contentEquals(c.toRelatorio())) {
				dados += "\t" + c.toRelatorio() + "\n";
				ultimaData = c.toRelatorio();
			}
			dados += "\t" + c.getcodProduto() + "\t" + c.getData() + "\t" + c.getProduto() + "\t" + c.getVendedor()
					+ "\t" + c.getCliente() + "\t" + c.getGeneroRoupa();
			dados += c.getQntProduto() + "\t" + c.getDesconto() + "\t" + String.format("%.2f", c.getvalorTotal())
					+ "\r\n";
			total += c.getvalorTotal();
		}
		dados += "\t----------------------------------------------------------------------------------------------------------------------------------\n";
		dados += "\t\t\t\t\tTotal Geral = " + String.format("R$ %.2f", total) + "\n";
		dados += "\t----------------------------------------------------------------------------------------------------------------------------------\n";
		areaDeTexto = new JTextArea(dados);
		scroll = new JScrollPane(areaDeTexto);
		scroll.setBounds(10, 10, 665, 360); // (left,top,width,height)
		panel.add(scroll);

		btSalvar.setBounds(570, 372, 100, 30);
		panel.add(btSalvar);
		btSalvar.addActionListener(this);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (btSalvar == e.getSource()) {
			// Objeto que possui metodo para abrir uma janela onde podemos escolher um
			// diretório e arquivo
			JFileChooser fc = new JFileChooser();
			// Objeto que filtra o tipo de arquivo, neste caso somente TXT
			FileNameExtensionFilter filter = new FileNameExtensionFilter("Selecione apenas TXT", "txt");
			fc.setFileFilter(filter);// Método que abre efetivamente a janela de salvar
			if (fc.showSaveDialog(this) != 1) { // Caso o usuário clique em salvar e conclua
				// Objeto do tipo aquivo que recebe os dados que o usuario selecionou na janela
				File arquivo = fc.getSelectedFile();
				// Filtra se o usuário colocou a extenção .txt ou não
				if (arquivo.getPath().endsWith(".txt")) {
					ProcessaRelatorio.setRd(dados, arquivo.getPath());
				} else { // Se ele não colocou o programa coloca
					ProcessaRelatorio.setRd(dados, arquivo.getPath() + ".txt");
				}
			} // Se ele cancelar não retorna 1 e sai
			dispose();
		}
	}

}
