package modelo;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;

public class Arquivo {

	public void cadastrar(String info, String fileName, boolean append) {
		try {
			FileWriter fw = new FileWriter("Aleatorios.txt", true);
			BufferedWriter bw = new BufferedWriter(fw);

			bw.write(info);

			bw.close();
			fw.close();

		} catch (Exception e) {

		}
	}

	public ArrayList<String> ler(String fileNames) {
		ArrayList<String> aleatorios = new ArrayList<>();
		try {
			FileReader fr = new FileReader("Aleatorios.txt");
			BufferedReader br = new BufferedReader(fr);

			String linha = "";
			while ((linha = br.readLine()) != null) {
				aleatorios.add(linha);
			}
			br.close();
			fr.close();
		} catch (Exception e) {

		}
		return aleatorios;
	}

}
