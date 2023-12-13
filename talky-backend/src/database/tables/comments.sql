CREATE TABLE Comments (
    CommentID INT PRIMARY KEY IDENTITY,
    UserID INT FOREIGN KEY REFERENCES Users(UserID),
    PostID INT FOREIGN KEY REFERENCES Posts(PostID),
    ParentCommentID INT FOREIGN KEY REFERENCES Comments(CommentID),  -- For nested comments
    CommentText NVARCHAR(MAX),
    CommentDate DATETIME DEFAULT GETDATE()
);
