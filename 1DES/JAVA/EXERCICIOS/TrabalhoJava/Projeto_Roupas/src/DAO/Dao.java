package DAO;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import modelo.Venda;

public class Dao {

	private BufferedReader br;
	private BufferedWriter bw;
	private String path = ".\\dados\\Vendas.csv";
	private ArrayList<Venda> linhas = new ArrayList<>();

	public ArrayList<Venda> ler() {
		Venda venda;
		try {
			br = new BufferedReader(new FileReader(path));
			String linha = br.readLine();
			while (linha != null) {
				venda = new Venda(linha);
				linhas.add(venda);
				linha = br.readLine();
			}
			br.close();
		} catch (FileNotFoundException e) {
			System.out.println(e);
		} catch (IOException e) {
			System.out.println(e);
		}
		return linhas;
	}

	public void escrever(ArrayList<Venda> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(path));
			for (Venda p : linhas) {
				bw.write(p.tocsv() + "\r\n");
			}
			bw.close();
		} catch (IOException e) {
			System.out.println(e);
		}
	}

}
