package modelo;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		Arquivo arq = new Arquivo();

		int opcao = 0;
		do {
			System.out.println("1 - Cadastrar;");
			System.out.println("2 - Listar;");
			System.out.println("0 - Sair;");
			opcao = input.nextInt();
			input.nextLine();
			
			switch (opcao) {
			case 1:
				System.out.println("Informe o seu nome: ");
				String nome = input.next();

				System.out.println("Informe a sua idade: ");
				String idade = input.next();

				System.out.println("Informe sua cidade: ");
				String cidade = input.next();

			
				String data = nome + " ; " + idade + " ; " + cidade;

				arq.escrever(data, "Pessoas", true);

				break;
			case 2:
				ArrayList<String> infoFile = arq.ler("Pessoas");
				
				System.out.println("Informe o nome que deseja procurar: ");
				String busca = input.nextLine();
				
				for (String linha : infoFile) {
					String[] temp = linha.split(";");
					if(temp[2].toLowerCase().contains(busca.toLowerCase())); //Buscar. toLowercase -- deixa tudo minúsculo
					System.out.println("Nome : " + temp[0]);
					System.out.println("Idade : " + temp[1]);
					System.out.println("Cidade : " + temp[2]);
				}
				
				break;
			case 0:
				System.out.println("Até");
				break;
			}

		} while (opcao != 0);

	}

}
