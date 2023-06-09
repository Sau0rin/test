PGDMP     3    	                {           web    10.23    13.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16393    web    DATABASE     `   CREATE DATABASE web WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE web;
                postgres    false            �            1259    16410    Doctors    TABLE     �   CREATE TABLE public."Doctors" (
    "FIO" text DEFAULT ''::text NOT NULL,
    "litleInfo" text,
    "fullInfo" text,
    specializations text,
    foto text,
    clinic text
);
    DROP TABLE public."Doctors";
       public            postgres    false            �            1259    16405    __EFMigrationsHistory    TABLE     �   CREATE TABLE public."__EFMigrationsHistory" (
    "MigrationId" character varying(150) NOT NULL,
    "ProductVersion" character varying(32) NOT NULL
);
 +   DROP TABLE public."__EFMigrationsHistory";
       public            postgres    false            �            1259    16496    anketa    TABLE     �   CREATE TABLE public.anketa (
    "userName" text NOT NULL,
    fio text,
    date text,
    pol text,
    adres text,
    country text,
    region text,
    city text,
    street text,
    house text,
    polisnumber text,
    oms text,
    phone text
);
    DROP TABLE public.anketa;
       public            postgres    false            �            1259    16427    clinics    TABLE     v   CREATE TABLE public.clinics (
    name text NOT NULL,
    city text,
    adres text,
    phone text,
    foto text
);
    DROP TABLE public.clinics;
       public            postgres    false            �            1259    16504    records    TABLE        CREATE TABLE public.records (
    fio text NOT NULL,
    doctorname text,
    date text,
    pol text,
    adres text,
    country text,
    region text,
    city text,
    street text,
    house text,
    polisnumber text,
    oms text,
    phone text
);
    DROP TABLE public.records;
       public            postgres    false            �            1259    16416    specializations    TABLE     O   CREATE TABLE public.specializations (
    name text NOT NULL,
    city text
);
 #   DROP TABLE public.specializations;
       public            postgres    false            �            1259    16435    users    TABLE     s   CREATE TABLE public.users (
    login text NOT NULL,
    password text DEFAULT ''::text NOT NULL,
    role text
);
    DROP TABLE public.users;
       public            postgres    false                      0    16410    Doctors 
   TABLE DATA           b   COPY public."Doctors" ("FIO", "litleInfo", "fullInfo", specializations, foto, clinic) FROM stdin;
    public          postgres    false    197                    0    16405    __EFMigrationsHistory 
   TABLE DATA           R   COPY public."__EFMigrationsHistory" ("MigrationId", "ProductVersion") FROM stdin;
    public          postgres    false    196   H                 0    16496    anketa 
   TABLE DATA           �   COPY public.anketa ("userName", fio, date, pol, adres, country, region, city, street, house, polisnumber, oms, phone) FROM stdin;
    public          postgres    false    201   �                 0    16427    clinics 
   TABLE DATA           A   COPY public.clinics (name, city, adres, phone, foto) FROM stdin;
    public          postgres    false    199   �                 0    16504    records 
   TABLE DATA           �   COPY public.records (fio, doctorname, date, pol, adres, country, region, city, street, house, polisnumber, oms, phone) FROM stdin;
    public          postgres    false    202   z                 0    16416    specializations 
   TABLE DATA           5   COPY public.specializations (name, city) FROM stdin;
    public          postgres    false    198   /                 0    16435    users 
   TABLE DATA           6   COPY public.users (login, password, role) FROM stdin;
    public          postgres    false    200           �
           2606    16424    Doctors PK_Doctors 
   CONSTRAINT     W   ALTER TABLE ONLY public."Doctors"
    ADD CONSTRAINT "PK_Doctors" PRIMARY KEY ("FIO");
 @   ALTER TABLE ONLY public."Doctors" DROP CONSTRAINT "PK_Doctors";
       public            postgres    false    197            �
           2606    16409 .   __EFMigrationsHistory PK___EFMigrationsHistory 
   CONSTRAINT     {   ALTER TABLE ONLY public."__EFMigrationsHistory"
    ADD CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY ("MigrationId");
 \   ALTER TABLE ONLY public."__EFMigrationsHistory" DROP CONSTRAINT "PK___EFMigrationsHistory";
       public            postgres    false    196            �
           2606    16503    anketa PK_anketa 
   CONSTRAINT     X   ALTER TABLE ONLY public.anketa
    ADD CONSTRAINT "PK_anketa" PRIMARY KEY ("userName");
 <   ALTER TABLE ONLY public.anketa DROP CONSTRAINT "PK_anketa";
       public            postgres    false    201            �
           2606    16434    clinics PK_clinics 
   CONSTRAINT     T   ALTER TABLE ONLY public.clinics
    ADD CONSTRAINT "PK_clinics" PRIMARY KEY (name);
 >   ALTER TABLE ONLY public.clinics DROP CONSTRAINT "PK_clinics";
       public            postgres    false    199            �
           2606    16511    records PK_records 
   CONSTRAINT     S   ALTER TABLE ONLY public.records
    ADD CONSTRAINT "PK_records" PRIMARY KEY (fio);
 >   ALTER TABLE ONLY public.records DROP CONSTRAINT "PK_records";
       public            postgres    false    202            �
           2606    16426 "   specializations PK_specializations 
   CONSTRAINT     d   ALTER TABLE ONLY public.specializations
    ADD CONSTRAINT "PK_specializations" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public.specializations DROP CONSTRAINT "PK_specializations";
       public            postgres    false    198            �
           2606    16445    users PK_users 
   CONSTRAINT     [   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_users" PRIMARY KEY (login, password);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT "PK_users";
       public            postgres    false    200    200               &  x����J�P���S̲BI��
}7EKQP��n\��ƽ1M �I�
羂O��P�.�˅��3s�����%jT�)���s����WH�LLse��B�
ԙ�����92��V_�t0�c�m����cj5̥+L�ٓ8�(�E����huN�C�h<r0��j:߯$�V��%�v\�NK�&x��朥Dל��ygan���a�m�
�+��x�M\!oWZA��Ɲ6�HX���]*���m�r���>3�0׿|��׏��2��k�������<�u? ���         �   x����
�@Dk�c�}�&)���J�eI�\Ib�_o��(�s310Yd+ ~u��n�؇Q���3�����`��C�DΟ�k
J(`{n��[o_�K��i�����M?,c�j5j5��0�s�2ysX ����?�C9� <��}f����S�         �   x�m�1
�@E��S�\�n=��P�i<���XY�5��D���F�Aa������\��-"*tx"���w�[*�eΏ2�D�Kk\S��w���Hf��ًY�6J��8႘Jj���Ǌ�D��5=:X���J������@	~�|n���Ыy`         �   x���;�QE��U�(�~�D�v��?�����G��b�n��\�զj E%���Ta�'\d��>^)C���	R���p�!�HUŐ��zK�$���r�Skԓ�O���Z�F�W�%	O�Wļ@J�s�G�9"S֐�ƙwH�vB�#��M�r������(�LG�6��/t5aQ\�2ќ�<����$0:��[-EQ� ����         �   x�m�A
�0D�?��%i��x�E7@PTąː�T��&7rōB��2�`� ����������oO��^c�..Ѥ�f��b�F�D��\�w������<ٓ�
�Jgp�!֜Cjk7�8��kKM��_v{�U��X�JWqT.'W��QJ� Mx��         �   x��QI
1<���/���@���A��8#�Y����?�;�L$q9䐢���3I�C	J�p��!%���5��5��M@�ۭnG!g�� V��CDLܸ���M�aAPW0�ӭ(Ŗi��0a�TƊ;�4ƕ#z��+���������s�4���L1��I|݃�@�U�}F}�m�������j��xu�l��I���(�I?�X+x��]՟�͆R��6)         &   x�KL����442�L��J�S�8��9A�=... �	�     