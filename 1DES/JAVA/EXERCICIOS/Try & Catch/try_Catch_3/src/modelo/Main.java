package modelo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;


	public class Main {
		public static int n1;
		public static int n2;
		public static int n3;

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
					System.out.println("Informe o nome:");
					String nome = scan.nextLine();
					
					System.out.println("Informe a 1º nota: ");
					n1 = scan.nextInt();
					
					System.out.println("Informe a 2º nota: ");
					n2 = scan.nextInt();
					
					System.out.println("Informe a 3º nota: ");
					n3 = scan.nextInt();
					
	
					String data = nome + "\t" +media();

					arq.cadastrar(data, "Alunos" , true);
					break;
				case 2:
					
					ArrayList<String> infoFile = arq.ler("Alunos");

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

		private static double media() {
			double media = (n1+n2+n3)/3;
			return media;
		}
	}
