package modelo;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int opcao = 0;
		Arquivo arq = new Arquivo();

		do {
			System.out.println("1 - Cadastrar ");
			System.out.println("2 - Listar ");
			System.out.println("0 - Sair");
			opcao = scan.nextInt();
			scan.nextLine();

			switch (opcao) {
			case 1:
				System.out.println("Informe o usuário:");
				String nome = scan.nextLine();

				System.out.println("Informe a senha: ");
				String senha = scan.next();

				String data = nome + "\t" + senha;
				arq.cadastrar(data, "Login", true);
				break;

			case 2:

				ArrayList<String> infoFile = arq.ler("Login");

				System.out.println("Insira o usuário: ");
				String b1 = scan.next();

				System.out.println("Insira a senha: ");
				String b2 = scan.next();

				for (String linha : infoFile) {
					String[] temp = linha.split("\t");
					if ((temp[0].toLowerCase().contains(b1.toLowerCase()))
							&& (temp[1].toLowerCase().contains(b2.toLowerCase()))) {
						System.out.println("Acesso permitido");

					}
				}

				break;
			case 0:
				System.out.println("Até mais.");
				break;

			}

		} while (opcao != 0);

	}
}
