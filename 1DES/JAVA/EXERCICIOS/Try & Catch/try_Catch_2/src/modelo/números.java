package modelo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class números {
	public static int[] listadenumeros = new int[5];

	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);
		int opcao = 0;
		Arquivo arq = new Arquivo();

		do {
			System.out.println("1 -Gerar Aleatório");
			System.out.println("2 - Listar Aleatório");
			System.out.println("0 - Sair");
			opcao = scan.nextInt();
			scan.nextLine();

			switch (opcao) {
			case 1:
				System.out.println("Cadastrado aleatório");
				for (int i = 0; i < listadenumeros.length; i++) {
					listadenumeros[i] = new Random().nextInt(10);

				}
				String data = crescente();
				arq.embaralhar(data, "Aleatorios", true);
				break;
			case 2:
				ArrayList<String> infoFile = arq.ler("Aleatorios");

				for (String linha : infoFile) {
					System.out.println(linha);
				}
				break;
			case 0:
				System.out.println("Até mais.");
				break;

			}

		} while (opcao != 0);
	}

	private static String crescente() {
		String a = "";
		Arrays.sort(listadenumeros);

		for (int i = 0; i < listadenumeros.length; i++) {
			a += (listadenumeros[i] + " ");

		}
		return a;
	}
}
