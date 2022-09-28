package modelo;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int opcao = 0;
		Login arq = new Login();

		do {
			System.out.println("1 - Cadastrar Pessoa");
			System.out.println("2 - Listar Cadastrados");
			System.out.println("0 - Sair");
			opcao = scan.nextInt();
			scan.nextLine();

			switch (opcao) {
			case 1:
				System.out.println("Informe o nome:");
				String nome = scan.nextLine();

				System.out.println("Informe o ano de nascimento: ");
				String nasc = scan.nextLine();

				String data = nome + ";" + nasc + ";" + "\r\n";

				arq.escrever(data);

				break;
			case 2:
				ArrayList<String> linhadoarquivo = arq.ler();

				for (String linha : linhadoarquivo) {
					// 0 //1
					// nome // ano
					String[] temp = linha.split(";"); // Split quebra as informações. Vai virar duas coisas diferentes.
														// String";"... Retorna em vetores;

					System.out.println("Nome : " + temp[0]);
					System.out.println("Nascimento : " + temp[1]);

					int ano = Integer.parseInt(temp[1]);
					int idade = 2022 - ano;

					System.out.println("Idade : " + idade);
					System.out.println("-------------------");
				}
				break;
			case 0:
				System.out.println("Até mais.");
				break;

			}

		} while (opcao != 0);
	}
}
