package dao;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import modelo.Manutencao;

public class ManutencaoDAO {
	private BufferedReader br;
	private BufferedWriter bw;
	private String arquivo = "C:\\Users\\desenvolvimento\\Desktop\\Programas-em-Java\\Registros_de_Manutencao_2\\assents\\manutencoes.csv";
	
	
	public ArrayList<Manutencao> ler(){
		ArrayList<Manutencao> linhas = new ArrayList<>();
		Manutencao manu;
		try {
			br= new BufferedReader(new FileReader(arquivo));
			String Linha = br.readLine();
			while(Linha != null) {
				manu= new Manutencao(Linha);
				linhas.add(manu);
				Linha=br.readLine();
			}
			br.close();
		} catch (FileNotFoundException e) {
			System.out.println(e);
		} catch (IOException e) {
			System.out.println(e);
		}
		return linhas;
	}


	
	public void escrever(ArrayList<Manutencao> linhas) {
		try {
			bw= new BufferedWriter(new FileWriter(arquivo));
			for(Manutencao man : linhas) {
				bw.write(man.toCSV());
			}
			bw.close();
		}catch (IOException e) {
			System.out.println(e);
		}
		
	}

}