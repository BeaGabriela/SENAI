package visao;

	import java.io.IOException;
	import java.text.ParseException;
	import java.text.SimpleDateFormat;
	import java.util.Scanner;

	import modelo.aluno;
	import modelo.Nota;

	import java.util.Random;

	public class principal {
		static aluno[] alunos = new aluno[10];
		private static Nota[] notas = new Nota[3];
		static Random rand = new Random();
		static Scanner scan = new Scanner(System.in);
		static SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
		static int qtd;
		static String componente;
		int[] nota = new int[12];

		public static void main(String[] args) throws IOException, ParseException {
			int menu = 0;
			while (menu != 9) {
				System.out.println("1-Cadastrar aluno\n2-Cadastrar nota\n3-Listar todos os alunos\n"
						+ "4-Listar todas as notas\n5-Buscar por RA\n6-Buscar por nome\n7-Buscar aprovados\n8-Buscar Reprovados");
				menu = scan.nextInt();
				switch (menu) {

				case 1:
					Cadastraralunos();
					break;
				case 2:
					cadastrarNotas();
					break;
				case 3:
					listarAlunos();
					break;

				case 4:
					listarNotas();
					break;
				case 5:
					obterAlunoRA();
					break;
				case 6:
					obterAlunoNome();
					break;
				case 7:
					Buscaraprovados();
					break;
				case 8:
					buscarReprovados();
					break;
				default:
					System.out.println("Opção invalida. Tente novamente.");

				}
			}
		}

		// 8
		private static void buscarReprovados() {
			for (int i = 0; i < alunos.length; i++) {
				if (alunos[i] != null) {
					if (alunos[i].obterConceito().equals("Reprovado!")) {
						System.out.println("Aluno reprovado");

						System.out.println("  Componente\t1ª Nota\t2ª Nota\3ª Nota\tMédia\n");
						for (int j = 0; j < alunos[i].notas.length; j++) {
							System.out.print("\t" + alunos[i].notas[j].componente);
							for (int k = 0; k < alunos[i].notas[j].nota.length; k++) {
								System.out.print("\t" + alunos[i].notas[j].nota[k]);
							}
							if (alunos[i].notas[j].obterMedia() < 50) {
								System.out.printf("\t%.2f", alunos[i].notas[j].obterMedia());
								System.out.println("\n");

							}else {
								System.out.printf("\t%.2f", alunos[i].notas[j].obterMedia());
								System.out.println("\n");
							}
						}
					}
				}
			}
		}

		// 7
		private static void Buscaraprovados() {
			System.out.println("Alunos Aprovados: ");
			for (int i = 0; i < alunos.length; i++) {
				if (alunos[i] != null) {
					if (alunos[i].obterConceito().equals("Aprovado!")) {
						System.out.println("  Componente\t1ª Nota\t2ª Nota\3ª Nota\tMédia\n");
						for (int j = 0; j < alunos[i].notas.length; j++) {
							System.out.print("\t" + alunos[i].notas[j].componente);
							for (int k = 0; k < alunos[i].notas[j].nota.length; k++) {
								System.out.print("\t" + alunos[i].notas[j].nota[k]);
							}
							if (alunos[i].notas[j].obterMedia() > 50) {
								System.out.printf("\t%.2f", alunos[i].notas[j].obterMedia());
								System.out.println("\n");
							
							}
						}
					}
				}
			}
	}

		// 6
		private static void obterAlunoNome() {	
			System.out.println("Digite o nome do aluno que deseja procurar: ");
			String nome1 = scan.next();
			System.out.println("O nome a ser procurado é: " );
			System.out.println("Encontrei o(s) aluno(s) com esse nome:  \n");
			for (int j = 0; j < alunos.length; j++) {
				if (alunos[j] != null) {
					if (alunos[j].nome.equalsIgnoreCase(nome1)) {
						System.out.println( alunos[j].paraString()+ "\n");
					}
				}
			}
		}

		// 5
		private static void obterAlunoRA() {
			System.out.println("Digite o RA que deseja procurar: \n");
			int RA1 = scan.nextInt();
			System.out.println("O RA a ser procurado é: " + RA1 + "\n");
			System.out.println("Encontrei o(s) aluno(s) com esse RA: \n");
			for (int j = 0; j < alunos.length; j++) {
				if (alunos[j] != null) {
					if (alunos[j].RA == RA1) {
						System.out.println(alunos[j].paraString() + "\n");
					}
				}
			}		
			}
		

		// 4
		private static void listarNotas() {
			for (int i = 0; i < alunos.length; i++) {
				if (alunos[i] != null) {
					for (int j = 0; j < alunos[i].notas.length; j++) {
						if (alunos[i].notas[j] != null) {
							System.out.println(alunos[i].notas[j].componente);
							for (int j2 = 0; j2 < alunos[i].notas[j].nota.length; j2++) {
								System.out.println(alunos[i].notas[j].nota[j2]);

							}
							if (alunos[i].notas[j].obterMedia() <= 50) {
								System.out.printf("\t%.2f", alunos[i].notas[j].obterMedia());
								System.out.println("\n");

							} else {
								System.out.printf("\t%.2f", alunos[i].notas[j].obterMedia());
								System.out.println("\n");
							}
						}
					}
					System.out.println(alunos[i].obterConceito());
				}
			}
		}

		// 3
		private static void listarAlunos() {
			System.out.println("RA\tAluno\tNascimento\tIdade");
			for (int i = 0; i < alunos.length; i++) {
				if (alunos[i] != null) {
					System.out.println(alunos[i].paraString());
				}
			}
		}

		// 2
		public static void cadastrarNotas() {

			int qtdNotas = 0;

			System.out.println("Digite o RA do aluno que deseja cadastrar");
			int ra = scan.nextInt();

			for (int i = 0; i < alunos.length; i++) {
				if (alunos[i] != null) {
					if (alunos[i].RA == ra) {
						Nota[] notas = alunos[i].notas;
						System.out.println("ALUNO: " + alunos[i].nome);
						do {
							System.out.println("Quantas notas deseja cadastrar? (max: 4)");
							qtdNotas = scan.nextInt();

							if (qtdNotas > 4) {
								System.out.println("Tente novamente.(limite 4)");

							} else {
								for (int i2 = 0; i2 < qtdNotas; i2++) {
									for (int j = 0; j < 4; j++) {
										if (notas[j] == null) {
											System.out.println("Digite á matéria\tnota-1\tnota-2\tnota-3");
											String componente = scan.next();

											float[] nota = new float[3];

											for (int k2 = 0; k2 < nota.length; k2++) {
												nota[k2] = scan.nextFloat();
											}

											alunos[i].notas[j] = new Nota(componente, nota);

											break;
										}
									}
								}
							}

						} while (qtdNotas > 4);
					} else if (i == 9) {
						System.out.println("RA não encontrado");
						break;
					}
				}
			}
		}

		// 1
		private static void Cadastraralunos() throws ParseException {

			do {
				System.out.println("Digite a quantidade de alunos que deseja cadastrar: ");
				int qtd = scan.nextInt();
				if (qtd > 10) {
					System.out.println("Digite novamente um valor menor que 10.");

				} else {
					for (int i = 0; i < qtd; i++) {
						System.out.println("RA\tNome\tData de nascimento");
						for (int j = 0; j < alunos.length; j++) {
							if (alunos[i] == null) {
								alunos[i] = new aluno();
								alunos[i].RA = scan.nextInt();
								alunos[i].nome = scan.next();
								alunos[i].nascimento = df.parse(scan.next());
								break;
							}
						}
					}
				}
			} while (qtd > 10);
		}
	}
	 

