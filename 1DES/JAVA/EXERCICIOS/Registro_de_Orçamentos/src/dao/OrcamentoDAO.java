package dao;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import modelo.Orcamento;

public class OrcamentoDAO {
	private BufferedReader br;
	private BufferedWriter bw;
	private String arquivo=".\\orcamentos\\orcamentos.csv";
	private ArrayList<Orcamento> orcamentos = new ArrayList<>();
	
	public ArrayList<Orcamento> ler(){
		Orcamento or;
		try {
			br = new BufferedReader (new FileReader(arquivo));
			String linha = br.readLine();
			while(linha != null) {
				or = new Orcamento(linha);
				orcamentos.add(or);
				linha = br.readLine();
			}
			br.close();
		}catch(FileNotFoundException e) {
			System.out.println(e);
		}catch(IOException e) {
			System.out.println(e);
		}
		return orcamentos;	
	}
	
	public void escrever(ArrayList<Orcamento> vs) {
		try {
			bw = new BufferedWriter(new FileWriter(arquivo));
			for(Orcamento or : vs) {
				bw.write(or.toCSV());
			}
			bw.close();
		}catch(IOException e) {
			System.out.println(e);
		}
	}
}
