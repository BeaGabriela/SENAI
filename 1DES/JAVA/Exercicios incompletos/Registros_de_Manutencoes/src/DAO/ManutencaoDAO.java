package DAO;

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
	private String path = "C:\\Users\\desenvolvimento\\Desktop\\Programas-em-Java\\Registros_de_Manutencoes\\manutencoes\\manutencao.csv";
	
	
	public ArrayList<Manutencao> ler(){
		ArrayList<Manutencao> manu = new ArrayList<>();
		Manutencao manutencao;
		try {
			br = new BufferedReader(new FileReader(path));
			String manute = br.readLine();
			while(manute != null) {
				manutencao = new Manutencao(manute);
				manu.add(manutencao);
				manute = br.readLine();
			}
			br.close();
		} catch (FileNotFoundException e) {
			System.out.println(e);
		} catch (IOException e) {
			System.out.println(e);
		}
		return manu;
	}
	
	public void escrever(ArrayList<Manutencao> manu) {
		try {
			bw = new BufferedWriter(new FileWriter(path));
			for (Manutencao u : manu) {
				bw.write(u.toCSV());
			}
			bw.close();
		} catch (IOException e) {
			System.out.println(e);
		}
	}
}

