USE bs7r5rpslglkdscbpgbe;
SELECT * FROM illustrations ORDER BY date_illustration DESC;
SELECT * FROM illustrations ORDER BY name;
INSERT INTO illustrations (name, fileName) 
VALUES
("mocca", "mocca.png"),
("sira", "sira.png"),
("sunny", "sunny.png"),
("trino", "trino.png"),
("yeron", "yeron.png");
INSERT INTO illustrations (name, fileName) 
VALUES
("kena", "kena.png"),
("yonsi", "yonsi.png"),
("arwen", "arwen.png");

UPDATE illustrations SET date_illustration = "2024-05-10" WHERE name = "mocca";
UPDATE illustrations SET date_illustration = "2023-09-30" WHERE name = "sira";
UPDATE illustrations SET date_illustration = "2024-05-17" WHERE name = "sunny";
UPDATE illustrations SET date_illustration = "2023-05-12" WHERE name = "trino";
UPDATE illustrations SET date_illustration = "2023-09-30" WHERE name = "yeron";
UPDATE illustrations SET date_illustration = "2023-06-20" WHERE name = "kena";
UPDATE illustrations SET date_illustration = "2023-02-07" WHERE name = "yonsi";
UPDATE illustrations SET date_illustration = "2022-11-12" WHERE name = "arwen";

INSERT INTO illustrations (name, fileName, date_illustration) 
VALUES
("pepo", "pepo.png", "2024-01-09"),
("jani", "jani.png", "2023-09-18"),
("oliver_benji", "oliver_benji.png", "2024-07-23"),
("fiona", "fiona.png", "2024-07-23"),
("boni", "boni.png", "2023-09-17"),
("lennon", "lennon.png", "2023-07-01"),
("reina", "reina.png", "2023-06-20"),
("uxua", "uxua.png", "2023-07-19"),
("yako", "yako.png", "2023-07-19"),
("duque", "duque.png", "2023-05-21"),
("gala", "gala.png", "2023-05-02"),
("kiara", "kiara.png", "2023-03-23"),
("goofy", "goofy.png", "2023-04-21"),
("rafaela", "rafaela.png", "2023-04-23"),
("rocky", "rocky.png", "2023-02-13"),
("rosco", "rosco.png", "2023-02-23"),
("sena", "sena.png", "2023-02-12"),
("nia", "nia.png", "2023-01-01"),
("roma", "roma.png", "2023-01-01"),
("habana", "habana.png", "2022-12-06"),
("lola", "lola.png", "2022-12-07"),
("nena", "nena.png", "2022-12-06"),
("xisca", "xisca.png", "2022-12-05"),
("chispa", "chispa.png", "2022-12-05"),
("aro", "aro.png", "2022-11-29"),
("anouk", "anouk.png", "2022-11-29"),
("tick", "tick.png", "2022-11-11"),
("nuska", "nuska.png", "2022-09-25"),
("luni", "luni.png", "2022-09-07"),
("mika", "mika.png", "2022-09-07"),
("haki", "haki.png", "2022-08-29"),
("marley", "marley.png", "2022-05-23"),
("danna", "danna.png", "2022-05-23"),
("kira", "kira.png", "2022-05-11"),
("enzo", "enzo.png", "2022-04-18"),
("juanita", "juanita.png", "2022-03-28"),
("curro", "curro.png", "2022-08-12"),
("tim", "tim.png", "2022-02-19"),
("bobby", "bobby.png", "2022-02-09"),
("nico", "nico.png", "2022-02-09"),
("gala", "gala2.png", "2022-01-12"),
("zion", "zion.png", "2022-01-09"),
("bimba", "bimba.png", "2022-01-09"),
("tizon", "tizon.png", "2022-01-09"),
("gordo", "gordo.png", "2023-12-13");