package controle;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import modelo.Planilha;

public class DAO {

	private BufferedWriter bw;
	private BufferedReader br;
	private String entrada = "C:\\Users\\desenvolvimento\\Desktop\\Programas-em-Java\\JAVA- 25-04\\dados\\entrada.csv";
	private String saida = "C:\\Users\\desenvolvimento\\Desktop\\Programas-em-Java\\JAVA- 25-04\\dados\\saida.csv";

	public ArrayList<Planilha> abrir() {
		ArrayList<Planilha> linhas = new ArrayList<>();
		Planilha p;
		try {
			br = new BufferedReader(new FileReader(entrada));
			String l = br.readLine();
			while (l != null) {
				p = new Planilha(l);
				linhas.add(p);
				l = br.readLine();
			}
			br.close();

		} catch (IOException e) {
			e.printStackTrace();
		}
		return linhas;

	}

	// Passando como parâmetro
	public void salvarSoma(ArrayList<Planilha> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(saida));
			for (Planilha l : linhas) {
				bw.write(l.adicao() + "\r\n");
			}
			bw.close();
		} catch (IOException e) {
			e.printStackTrace();

		}

	}

	public void salvarMultiplicacao(ArrayList<Planilha> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(saida));
			for (Planilha l : linhas) {
				bw.write(l.multiplicacao() + "\r\n");
			}
			bw.close();
		} catch (IOException e) {
			e.printStackTrace();

		}

	}

	public void salvarSubtracao(ArrayList<Planilha> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(saida));
			for (Planilha l : linhas) {
				bw.write(l.subtracao()  + "\r\n");
			}
			bw.close();
		} catch (IOException e) {
			e.printStackTrace();

		}

	}

	public void salvarDivisao(ArrayList<Planilha> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(saida));
			for (Planilha l : linhas) {
				bw.write(l.divisao()  + "\r\n");
			}
			bw.close();
		} catch (IOException e) {
			e.printStackTrace();

		}

	}

}
