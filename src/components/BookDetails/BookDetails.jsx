import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import { FaArrowLeft, FaMapMarkerAlt, FaClock, FaTag } from "react-icons/fa";

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const [relatedBooks, setRelatedBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        if (data) {
          const { description, title, covers, subject_places, subject_times, subjects } = data;
          const newBook = {
            description: description ? description.value || description : "No description found",
            title: title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects || [],
          };
          setBook(newBook);

          // Fetch related books
          if (subjects && subjects.length > 0) {
            fetch(
              `https://openlibrary.org/subjects/${encodeURIComponent(
                subjects[0].toLowerCase().replace(/ /g, "_")
              )}.json?limit=10`
            )
              .then((res) => res.json())
              .then((rel) => setRelatedBooks(rel.works || []));
          } else {
            setRelatedBooks([]);
          }
        } else {
          setBook(null);
          setRelatedBooks([]);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setRelatedBooks([]);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <div className="book-details-modern">
      <div className="container-modern">
        <button type="button" className="back-btn-modern" onClick={() => navigate("/book")}>
          <FaArrowLeft className="back-icon" />
          <span>Go Back</span>
        </button>

        <div className="book-details-layout">
          {/* Left - Book Cover */}
          <div className="book-cover-section">
            <div className="book-cover-wrapper">
              <img src={book?.cover_img} alt="Book cover" className="book-cover-image" />
            </div>
          </div>

          {/* Right - Book Info */}
          <div className="book-info-section">
            <div className="book-header">
              <h1 className="book-title">{book?.title}</h1>
            </div>
            <div className="book-description-card">
              <h3 className="section-title">Description</h3>
              <p className="book-description">{book?.description}</p>
            </div>
            <div className="book-metadata">
              <div className="metadata-item">
                <div className="metadata-header">
                  <FaMapMarkerAlt className="metadata-icon" />
                  <span className="metadata-label">Subject Places</span>
                </div>
                <p className="metadata-value">{book?.subject_places}</p>
              </div>
              <div className="metadata-item">
                <div className="metadata-header">
                  <FaClock className="metadata-icon" />
                  <span className="metadata-label">Subject Times</span>
                </div>
                <p className="metadata-value">{book?.subject_times}</p>
              </div>
              <div className="metadata-item">
                <div className="metadata-header">
                  <FaTag className="metadata-icon" />
                  <span className="metadata-label">Subjects</span>
                </div>
                <p className="metadata-value">
                  {book?.subjects && book.subjects.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Recommended / More Like This Section */}
        <div className="recommended-section">
          <h2 className="recommended-title">Recommended / More Like This</h2>
          {relatedBooks.length > 0 ? (
            <div className="booklist-content">
              {relatedBooks.map((item, idx) => (
                <div key={item.key || idx} className="booklist-item">
                  <a
                    href={`/book/${item.key.replace("/works/", "")}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <img
                      src={
                        item.cover_id
                          ? `https://covers.openlibrary.org/b/id/${item.cover_id}-L.jpg`
                          : coverImg
                      }
                      alt={item.title}
                      className="booklist-image"
                    />
                    <div className="booklist-title">{item.title}</div>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-recommendation">No recommendations found.</div>
          )}
        </div>
      </div>

      {/* ✅ STYLES */}
      <style jsx>{`
        .book-details-modern {
          min-height: 100vh;
          background-color: #f8fafc;
          padding: 2rem 0;
        }

        .container-modern {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .back-btn-modern {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 3rem;
          padding: 0.875rem 1.5rem;
          background-color: white;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          color: #475569;
          font-weight: 500;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .back-btn-modern:hover {
          background-color: #f1f5f9;
          border-color: #cbd5e1;
          transform: translateX(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .book-details-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          animation: fadeInUp 0.6s ease-out;
        }

        @media (min-width: 768px) {
          .book-details-layout {
            grid-template-columns: 300px 1fr;
            gap: 4rem;
          }
        }

        .book-cover-wrapper {
          background-color: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05),
            0 10px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid #f1f5f9;
          max-width: 300px;
          margin: 0 auto;
        }

        .book-cover-image {
          width: 100%;
          height: auto;
          border-radius: 0.5rem;
        }

        .book-info-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .book-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1e293b;
        }

        .book-description {
          color: #64748b;
          line-height: 1.7;
        }

        /* ✅ Recommended Section Styles */
        .recommended-section {
          margin-top: 3rem;
        }

        .recommended-title {
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #1e293b;
        }

        .booklist-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
        }

        .booklist-item {
          background-color: white;
          border: 1px solid #f1f5f9;
          border-radius: 0.75rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          padding: 1rem;
          text-align: center;
        }

        .booklist-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .booklist-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .booklist-title {
          font-weight: 600;
          font-size: 0.95rem;
          color: #334155;
          line-height: 1.3;
        }

        @media (max-width: 600px) {
          .booklist-content {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          .booklist-image {
            height: 160px;
          }
        }

        .no-recommendation {
          color: #64748b;
          font-size: 1rem;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default BookDetails;
