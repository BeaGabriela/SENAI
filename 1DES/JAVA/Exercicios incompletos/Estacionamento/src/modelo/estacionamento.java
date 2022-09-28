package modelo;

import java.util.ArrayList;
import java.util.Scanner;

public class estacionamento {

	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);
		arquivo arq = new arquivo();

		int opcao = 0;

		do {
			System.out.println("1 - Cadastrar;");
			System.out.println("2 - Listar;");
			System.out.println("0 - Sair;");
			opcao = scan.nextInt();
			scan.nextLine();

			switch (opcao) {
			case 1:
				System.out.println("Informe o modelo do carro: ");
				String modelo = scan.next();

				System.out.println("Informe a marca do carro: ");
				String marca = scan.next();

				System.out.println("Informa a cor do carro: ");
				String cor = scan.next();

				System.out.println("Informe a placa do carro: ");
				String placa = scan.next();

				String data = modelo + ";" + marca + ";" + cor + ";" + placa;

				arq.cadastrar(data, "Carros", true);
				break;

			case 2:
				ArrayList<String> infoFile = arq.ler("Carros");

				System.out.println("Informe a placa ou modelo que deseja procurar: ");
				String busca = scan.nextLine();

				for (String linha : infoFile) {
					String[] temp = linha.split(";");
					if ((temp[3].toLowerCase().contains(busca.toLowerCase()))
							|| (temp[0].toLowerCase().contains(busca.toLowerCase()))) {

						System.out.println("Modelo: " + temp[0]);
						System.out.println("Marca: " + temp[1]);
						System.out.println("Cor: " + temp[2]);
						System.out.println("Placa: " + temp[3]);
					}
				}
				break;
			case 0:
				System.out.println("Até");
				break;
			}

		} while (opcao != 0);
	}
}
