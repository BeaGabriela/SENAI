package modelo;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;

public class Arquivo {

	public void escrever(String data) {
		try {
			FileWriter fw = new FileWriter("index.html", true); // true não sobrepoe a outra;
			BufferedWriter bw = new BufferedWriter(fw);

			bw.write(data);

			bw.close();
			fw.close();

		} catch (Exception e) {

		}
	}

	public void escreverMenor(String data1) {
		try {
			FileWriter fw = new FileWriter("index.html", true); // true não sobrepoe a outra;
			BufferedWriter bw = new BufferedWriter(fw);

			bw.write(data1);

			bw.close();
			fw.close();

		} catch (Exception e) {

		}
	}

	public void Lista(String lista) {
		try {
			FileWriter fw = new FileWriter("index.html", true); // true não sobrepoe a outra;
			BufferedWriter bw = new BufferedWriter(fw);

			bw.write(lista);

			bw.close();
			fw.close();

		} catch (Exception e) {

		}
	}

	public void img(String imagemm) {
		try {
			FileWriter fw = new FileWriter("index.html", true); // true não sobrepoe a outra;
			BufferedWriter bw = new BufferedWriter(fw);

			bw.write(imagemm);

			bw.close();
			fw.close();

		} catch (Exception e) {

		}
	}

	public void img1(String imagem1) {
		try {
			FileWriter fw = new FileWriter("index.html", true); // true não sobrepoe a outra;
			BufferedWriter bw = new BufferedWriter(fw);

			bw.write(imagem1);

			bw.close();
			fw.close();

		} catch (Exception e) {

		}
	}

	public void cor(String color) {
		try {
			FileWriter fw = new FileWriter("index.html", true); // true não sobrepoe a outra;
			BufferedWriter bw = new BufferedWriter(fw);

			bw.write(color);

			bw.close();
			fw.close();

		} catch (Exception e) {

		}
	}

	public ArrayList<String> ler() {
		ArrayList<String> data = new ArrayList();

		try {
			FileReader fr = new FileReader("index.html");
			BufferedReader br = new BufferedReader(fr);

			String linha = "";
			while ((linha = br.readLine()) != null) {
				data.add(linha);
			}
			br.close();
			fr.close();
		} catch (Exception e) {

		}
		return data;
	}

}
