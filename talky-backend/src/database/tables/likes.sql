CREATE TABLE Likes (
    LikeID INT PRIMARY KEY IDENTITY,
    UserID INT FOREIGN KEY REFERENCES Users(UserID),
    PostID INT FOREIGN KEY REFERENCES Posts(PostID),
    CommentID INT FOREIGN KEY REFERENCES Comments(CommentID)
);