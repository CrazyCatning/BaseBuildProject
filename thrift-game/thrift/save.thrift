namespace cpp save_service 


service Save {
    i32 save_data(1: string name, 2: string password, 3: i32 player1_id, 4: i32 player2_id);
}